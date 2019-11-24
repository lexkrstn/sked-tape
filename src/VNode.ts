import clone from 'lodash.clone';
import difference from 'lodash.difference';
import intersection from 'lodash.intersection';

export interface VNodeProps {
  [key: string]: any;
}

export type VNodeChild = VNode | string | Array<VNode | string>;

export interface RefMap {
  [key: string]: VNode | HTMLElement;
}

const INTERNAL_PROPS = ['key', 'ref'];

/**
 * Returns a boolean value indicating whether the property is used by VDom
 * internally and should not be displayed in real DOM.
 */
function isInternalProp(propName: string) {
  return INTERNAL_PROPS.indexOf(propName) >= 0;
}

/**
 * Resets the property belonging to an instance of HTMLElement to its default value.
 */
function assignDefaultElementProp(elem: HTMLElement, propName: string) {
  switch (propName) {
    case 'style':
      elem.style.cssText = '';
      break;
    case 'dataset':
      for (const key of Object.keys(elem.dataset)) {
        delete elem.dataset[key];
      }
      break;
    default:
      (elem as any)[propName] = '';
  }
}

/**
 * Assigns the value of some property belonging to an instance of HTMLElement.
 *
 * The main purpose on this function is to unify assigning properties either
 * of string or object type.
 */
function assignElementProp(elem: HTMLElement, propName: string, value: string) {
  if (typeof value === 'object') {
    assignDefaultElementProp(elem, propName);
    for (const key of Object.keys(value)) {
      (elem as any)[propName][key] = value[key];
    }
  } else {
    (elem as any)[propName] = value;
  }
}

/**
 * Represents the virtual node.
 */
export default class VNode {
  /**
   * Applies changes to the real DOM so that it would match the virtual tree
   * with root at `dstVNode`.
   *
   * The initial hierarchy of `dstNode` must match the virtual hierarchy
   * described by `srcVNode`.
   *
   * During execution, the function updates references to DOM and VDom nodes in
   * the mapping object `refs`. Only the nodes with the `ref` property set are
   * added to the reference map. The value of the property is used as a key in
   * the map.
   */
  public static commit(
    dstNode: HTMLElement,
    dstVNode: VNode,
    srcVNode: VNode,
    refs: RefMap,
  ) {
    if (dstVNode.tagName !== srcVNode.tagName) {
      dstVNode.assign(srcVNode);
      const newNode = dstVNode.render(refs);
      dstNode.parentNode.replaceChild(newNode, dstNode);
      return newNode;
    }
    VNode.commitAttributes(dstNode, dstVNode, srcVNode);
    let dstChild = dstNode.firstChild;
    for (let i = 0; i < Math.max(dstVNode.children.length, srcVNode.children.length); i++) {
      // Skip nodes other than element or text (e.g. attribute or entity ref).
      while (
        dstChild &&
        dstChild.nodeType !== Node.ELEMENT_NODE &&
        dstChild.nodeType !== Node.TEXT_NODE
      ) {
        dstChild = dstChild.nextSibling;
      }
      if (i >= dstVNode.children.length) { // dstVNode has less children
        if (srcVNode.children[i] instanceof VNode) {
          const vNode = (srcVNode.children[i] as VNode).clone();
          dstVNode.appendChild(vNode);
          dstNode.appendChild(vNode.render(refs));
        } else {
          const text = srcVNode.children[i].toString();
          dstVNode.appendChild(text);
          dstNode.appendChild(document.createTextNode(text));
        }
      } else if (i >= srcVNode.children.length) { // srcVNode has less children
        if (dstVNode.children[i] instanceof VNode) {
          (dstVNode.children[i] as VNode).unsetRefsOfSubtree(refs);
        }
        dstVNode.removeChildAt(i--);
        const nextChild = dstChild.nextSibling;
        dstNode.removeChild(dstChild);
        dstChild = nextChild;
      } else if (
        dstVNode.children[i] instanceof VNode &&
        srcVNode.children[i] instanceof VNode
      ) {
        // Both source and destination are VNode which implies the dstChild to
        // be an HTMLElement.
        VNode.commit(
          dstChild as HTMLElement,
          dstVNode.children[i] as VNode,
          srcVNode.children[i] as VNode,
          refs,
        );
        dstChild = dstChild.nextSibling;
      } else {
        if (dstVNode.children[i] !== srcVNode.children[i]) {
          let newNode;
          if (srcVNode.children[i] instanceof VNode) {
            // The source node is VNode, the destination is not.
            dstVNode.replaceChildAt(i, (srcVNode.children[i] as VNode).clone());
            newNode = (dstVNode.children[i] as VNode).render(refs);
          } else {
            // The source node is textual the destination is either
            // VNode or textual node as well but with some other text.
            if (dstVNode.children[i] instanceof VNode) {
              (dstVNode.children[i] as VNode).unsetRefsOfSubtree(refs);
            }
            dstVNode.children[i] = srcVNode.children[i];
            newNode = document.createTextNode(srcVNode.children[i] as string);
          }
          dstNode.replaceChild(newNode, dstChild);
          dstChild = newNode;
        }
        dstChild = dstChild.nextSibling;
      }
    }
    return dstNode;
  }

  /**
   * A helper which applies changes to properties/attributes of an HTMLElement.
   */
  private static commitAttributes(dstNode: HTMLElement, dstVNode: VNode, srcVNode: VNode) {
    const dstNames = Object.keys(dstVNode.props);
    const srcNames = Object.keys(srcVNode.props);
    const obsoleteNames = difference(dstNames, srcNames);
    const newNames = difference(srcNames, dstNames);
    const commonNames = intersection(srcNames, dstNames);
    for (const name of obsoleteNames) {
      if (!isInternalProp(name)) {
        if (name in dstNode) {
          assignDefaultElementProp(dstNode, name);
        } else {
          dstNode.removeAttribute(name);
        }
      }
      delete dstVNode.props[name];
    }
    for (const name of newNames) {
      const value = srcVNode.props[name];
      if (!isInternalProp(name)) {
        if (name in dstNode) {
          assignElementProp(dstNode, name, value);
        } else {
          dstNode.setAttribute(name, value);
        }
      }
      dstVNode.props[name] = value;
    }
    for (const name of commonNames) {
      if (dstVNode.props[name] !== srcVNode.props[name]) {
        const value = srcVNode.props[name];
        if (!isInternalProp(name)) {
          if (name in dstNode) {
            assignElementProp(dstNode, name, value);
          } else {
            dstNode.setAttribute(name, value);
          }
        }
        dstVNode.props[name] = value;
      }
    }
  }

  public tagName: string;
  public props: VNodeProps;
  public children: Array<VNode | string>;
  public parent?: VNode;

  constructor(tagName: string, props?: VNodeProps, children?: VNodeChild) {
    this.tagName = tagName;
    this.props = props || {};
    this.children = children ? (children instanceof Array ? children : [children]) : [];
    for (const child of this.children) {
      if (child instanceof VNode) {
        child.parent = this;
      }
    }
  }

  public clone(): VNode {
    const children = this.children.map(
      child => child instanceof VNode ? child.clone() : clone(child),
    );
    return new VNode(this.tagName, clone(this.props), children);
  }

  /**
   * Copies the data of other VNode to this one.
   * The property `parent` remains untouched.
   */
  public assign(vNode: VNode) {
    this.tagName = vNode.tagName;
    this.props = clone(vNode.props);
    this.children = vNode.children.map(child => {
      if (child instanceof VNode) {
        child = child.clone();
        child.parent = this;
        return child;
      }
      return clone(child);
    });
    return this;
  }

  /**
   * Deletes references declared in props of the vNode and it's children from the
   * `refs` map.
   */
  public unsetRefsOfSubtree(refs: RefMap) {
    if (this.props.ref) {
      delete refs[this.props.ref];       // ref to an element
      delete refs['#' + this.props.ref]; // ref to a vNode
    }
    for (const child of this.children) {
      if (child instanceof VNode) {
        child.unsetRefsOfSubtree(refs);
      }
    }
  }

  /**
   * Adds a new child item to the end assigning the property `parent` of `VNode`s.
   */
  public appendChild(child: VNode | string) {
    if (child instanceof VNode) {
      child.parent = this;
    }
    this.children.push(child);
  }

  /**
   * Removes the child by its index from the internal array of children.
   * The method assigns `null` to the `parent` of the `VNode`s removed.
   */
  public removeChildAt(index: number) {
    if (this.children[index] instanceof VNode) {
      (this.children[index] as VNode).parent = null;
    }
    this.children.splice(index, 1);
  }

  public replaceChildAt(index: number, child: VNode | string) {
    if (child instanceof VNode) {
      child.parent = this;
    }
    this.children[index] = child;
  }

  /**
   * Creates the DOM tree from this virtual node hierarchy.
   */
  public render(refs: RefMap): HTMLElement {
    const elem = document.createElement(this.tagName);

    if (this.props) {
      // update refs
      if (refs && this.props.ref) {
        refs[this.props.ref] = elem;
        refs['#' + this.props.ref] = this;
      }
      // Create attributes from props
      for (const propName of Object.keys(this.props)) {
        if (propName in elem) {
          if (typeof this.props[propName] !== 'object') {
            (elem as any)[propName] = this.props[propName];
          } else {
            for (const key of Object.keys(this.props[propName])) {
              (elem as any)[propName][key] = this.props[propName][key];
            }
          }
        } else if (!isInternalProp(propName)) {
          elem.setAttribute(propName, this.props[propName]);
        }
      }
    }

    for (const child of this.children) {
      if (child instanceof VNode) {
        elem.appendChild(child.render(refs));
      } else {
        elem.appendChild(document.createTextNode(child));
      }
    }
    return elem;
  }
}
