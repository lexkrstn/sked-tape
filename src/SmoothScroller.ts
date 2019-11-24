export interface ScrollPos {
  left: number;
  top: number;
}

/**
 * Does linear interpolation between `a` and `b` by factor `f`.
 */
function lerp(a: number, b: number, f: number): number {
  return a + (b - a) * f;
}

/**
 * Clamps value x between a and b.
 */
function clamp(x: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, x));
}

/**
 * A cross-browser scrolling controller which gathers srolling messages and
 * combines them appropriately to animation tween to play. In particular it
 * allows to make the 1st mouse wheel scroll horizontally rather than vertically.
 * It also can be used to create a panning effect with the mouse.
 * The object of this class is designed to be aggregated in a controlled
 * component.
 */
export default class SmoothScroller {
  private from: ScrollPos = { left: 0, top: 0 };
  private to?: ScrollPos;
  private timerId?: number | NodeJS.Timeout = null;
  private startTime: number = 0;
  private duration: number = 100;

  constructor(private el: HTMLElement) {}

  /**
   * Must be called whenever the related element is replaced by some other.
   * For example, it may happen if DOM tree being changed by your frontend
   * framefork (like React / Vue / Angular).
   */
  public resetElement(el: HTMLElement) {
    if (this.el !== el) {
      this.stop();
      this.el = el;
      this.to = null;
    }
  }

  /**
   * Adds some delta to the scroll target and starts playing the animation.
   * The function doesn't stop the existing animation, if any, but goes between
   * them smoothly.
   */
  public addScrollBy({ left = 0, top = 0 }: Partial<ScrollPos> = {}) {
    this.from = {
      left: this.el.scrollLeft,
      top: this.el.scrollTop,
    };
    this.to = {
      left: clamp((this.to ? this.to.left : this.from.left) + left, 0, this.maxScrollLeft),
      top: clamp((this.to ? this.to.top : this.from.left) + top, 0, this.maxScrollTop),
    };
    this.play();
  }

  /**
   * Should be used to safely release the resources involved.
   */
  public destroy() {
    this.unscheduleNextFrame();
  }

  private stop({ goToEnd = false } = {}) {
    if (goToEnd) {
      this.step(1);
    }
    if (this.timerId) {
      this.unscheduleNextFrame();
    }
    this.from = {
      left: this.el.scrollLeft,
      top: this.el.scrollTop,
    };
  }

  private play({ reset = true } = {}) {
    if (this.to) {
      if (reset) {
        this.startTime = Date.now();
      }
      if (!this.timerId) {
        this.scheduleNextFrame();
      }
    }
  }

  private get maxScrollLeft() {
    return this.el.scrollWidth - this.el.clientWidth;
  }

  private get maxScrollTop() {
    return this.el.scrollHeight - this.el.clientHeight;
  }

  private stepScrollPos(factor: number): ScrollPos {
    return {
      left: lerp(this.from.left, this.to.left, clamp(factor, 0, 1)),
      top: lerp(this.from.top, this.to.top, clamp(factor, 0, 1)),
    };
  }

  private step(factor: number) {
    if (this.to) {
      const scrollPos = this.stepScrollPos(factor);
      this.el.scrollLeft = scrollPos.left;
      this.el.scrollTop = scrollPos.top;
    }
  }

  private scheduleNextFrame() {
    this.timerId = window.requestAnimationFrame ?
      requestAnimationFrame(this.onFrame) :
      setTimeout(this.onFrame, 1000 / 60);
  }

  private unscheduleNextFrame() {
    if (this.timerId) {
      if (window.requestAnimationFrame) {
        cancelAnimationFrame(this.timerId as number);
      } else {
        clearTimeout(this.timerId as NodeJS.Timer);
      }
      this.timerId = null;
    }
  }

  private onFrame = () => {
    const factor = (Date.now() - this.startTime) / this.duration;
    this.step(factor);
    if (factor < 1) {
      this.scheduleNextFrame();
    } else {
      this.timerId = null;
      this.to = null;
    }
  }
}
