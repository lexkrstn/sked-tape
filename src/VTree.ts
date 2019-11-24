import VNode, { RefMap } from './VNode';

/**
 * Represents tree of virtual nodes.
 */
export default class VTree {
  protected root: HTMLElement;
  protected vRoot: VNode;
  protected refs: RefMap;

  constructor(elem: HTMLElement) {
    this.root = elem;
    this.vRoot = new VNode(this.root.tagName.toLowerCase());
    this.refs = {};
  }

  public materialize(vNode: VNode): HTMLElement {
    this.root = VNode.commit(this.root, this.vRoot, vNode, this.refs);
    return this.root;
  }

  /**
   * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
   * You may use this function to update part of VTree.
   */
  public materializePartial(vNode: VNode) {
    const ref = vNode.props.ref;
    if (!ref) {
      throw new Error('The vNode given has no ref property');
    }
    const dstVNode = this.refs['#' + ref] as VNode;
    if (!dstVNode) {
      throw new Error('There is no ref="' + ref + '" defined');
    }
    VNode.commit(this.refs[ref] as HTMLElement, dstVNode, vNode, this.refs);
  }

  /**
   * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
   * You may use this function to update part of VTree by adding a `vNode` to the
   * end of children of the node referenced by `ref`.
   */
  public materializeNewChild(ref: string, vNode: VNode) {
    const dstVNode = this.refs['#' + ref] as VNode;
    if (!dstVNode) {
      throw new Error('There is no ref="' + ref + '" defined');
    }
    dstVNode.appendChild(vNode);
    (this.refs[ref] as HTMLElement).appendChild(vNode.render(this.refs));
  }

  /**
   * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
   * You may use this function to update part of VTree.
   */
  public dematerializePartial(ref: string) {
    const dstVNode = this.refs['#' + ref] as VNode;
    if (dstVNode) {
      // Remove real and virtual nodes from their trees
      const elem = this.refs[ref] as HTMLElement;
      elem.parentNode.removeChild(elem);
      dstVNode.parent.removeChildAt(dstVNode.parent.children.indexOf(dstVNode));
      // Make sure no refs will remain
      dstVNode.unsetRefsOfSubtree(this.refs);
    }
  }
}
