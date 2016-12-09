/// <reference types="skatejs" />
import * as skate from 'skatejs';

declare global {
  // https://www.typescriptlang.org/docs/handbook/jsx.html
  namespace JSX {
    interface Element extends skate.HNode {}
    interface ElementClass extends skate.Component<any> {
      // renderCallback(): JSX.Element
    }

    interface ElementAttributesProperty<Props extends {}> {
      // '!': any;
      readonly _props: Props,
      // [key:string]:Props
    }
    interface IntrinsicAttributes{}
    interface IntrinsicClassAttributes{}

    interface IntrinsicElements {
      a: HTMLProps<HTMLAnchorElement>;
      abbr: HTMLProps<HTMLElement>;
      address: HTMLProps<HTMLElement>;
      area: HTMLProps<HTMLAreaElement>;
      article: HTMLProps<HTMLElement>;
      aside: HTMLProps<HTMLElement>;
      audio: HTMLProps<HTMLAudioElement>;
      b: HTMLProps<HTMLElement>;
      base: HTMLProps<HTMLBaseElement>;
      bdi: HTMLProps<HTMLElement>;
      bdo: HTMLProps<HTMLElement>;
      big: HTMLProps<HTMLElement>;
      blockquote: HTMLProps<HTMLElement>;
      body: HTMLProps<HTMLBodyElement>;
      br: HTMLProps<HTMLBRElement>;
      button: HTMLProps<HTMLButtonElement>;
      canvas: HTMLProps<HTMLCanvasElement>;
      caption: HTMLProps<HTMLElement>;
      cite: HTMLProps<HTMLElement>;
      code: HTMLProps<HTMLElement>;
      col: HTMLProps<HTMLTableColElement>;
      colgroup: HTMLProps<HTMLTableColElement>;
      data: HTMLProps<HTMLElement>;
      datalist: HTMLProps<HTMLDataListElement>;
      dd: HTMLProps<HTMLElement>;
      del: HTMLProps<HTMLElement>;
      details: HTMLProps<HTMLElement>;
      dfn: HTMLProps<HTMLElement>;
      dialog: HTMLProps<HTMLElement>;
      div: HTMLProps<HTMLDivElement>;
      dl: HTMLProps<HTMLDListElement>;
      dt: HTMLProps<HTMLElement>;
      em: HTMLProps<HTMLElement>;
      embed: HTMLProps<HTMLEmbedElement>;
      fieldset: HTMLProps<HTMLFieldSetElement>;
      figcaption: HTMLProps<HTMLElement>;
      figure: HTMLProps<HTMLElement>;
      footer: HTMLProps<HTMLElement>;
      form: HTMLProps<HTMLFormElement>;
      h1: HTMLProps<HTMLHeadingElement>;
      h2: HTMLProps<HTMLHeadingElement>;
      h3: HTMLProps<HTMLHeadingElement>;
      h4: HTMLProps<HTMLHeadingElement>;
      h5: HTMLProps<HTMLHeadingElement>;
      h6: HTMLProps<HTMLHeadingElement>;
      head: HTMLProps<HTMLHeadElement>;
      header: HTMLProps<HTMLElement>;
      hgroup: HTMLProps<HTMLElement>;
      hr: HTMLProps<HTMLHRElement>;
      html: HTMLProps<HTMLHtmlElement>;
      i: HTMLProps<HTMLElement>;
      iframe: HTMLProps<HTMLIFrameElement>;
      img: HTMLProps<HTMLImageElement>;
      input: HTMLProps<HTMLInputElement>;
      ins: HTMLProps<HTMLModElement>;
      kbd: HTMLProps<HTMLElement>;
      keygen: HTMLProps<HTMLElement>;
      label: HTMLProps<HTMLLabelElement>;
      legend: HTMLProps<HTMLLegendElement>;
      li: HTMLProps<HTMLLIElement>;
      link: HTMLProps<HTMLLinkElement>;
      main: HTMLProps<HTMLElement>;
      map: HTMLProps<HTMLMapElement>;
      mark: HTMLProps<HTMLElement>;
      menu: HTMLProps<HTMLElement>;
      menuitem: HTMLProps<HTMLElement>;
      meta: HTMLProps<HTMLMetaElement>;
      meter: HTMLProps<HTMLElement>;
      nav: HTMLProps<HTMLElement>;
      noscript: HTMLProps<HTMLElement>;
      object: HTMLProps<HTMLObjectElement>;
      ol: HTMLProps<HTMLOListElement>;
      optgroup: HTMLProps<HTMLOptGroupElement>;
      option: HTMLProps<HTMLOptionElement>;
      output: HTMLProps<HTMLElement>;
      p: HTMLProps<HTMLParagraphElement>;
      param: HTMLProps<HTMLParamElement>;
      picture: HTMLProps<HTMLElement>;
      pre: HTMLProps<HTMLPreElement>;
      progress: HTMLProps<HTMLProgressElement>;
      q: HTMLProps<HTMLQuoteElement>;
      rp: HTMLProps<HTMLElement>;
      rt: HTMLProps<HTMLElement>;
      ruby: HTMLProps<HTMLElement>;
      s: HTMLProps<HTMLElement>;
      samp: HTMLProps<HTMLElement>;
      script: HTMLProps<HTMLElement>;
      section: HTMLProps<HTMLElement>;
      select: HTMLProps<HTMLSelectElement>;
      small: HTMLProps<HTMLElement>;
      source: HTMLProps<HTMLSourceElement>;
      span: HTMLProps<HTMLSpanElement>;
      strong: HTMLProps<HTMLElement>;
      style: HTMLProps<HTMLStyleElement>;
      sub: HTMLProps<HTMLElement>;
      summary: HTMLProps<HTMLElement>;
      sup: HTMLProps<HTMLElement>;
      table: HTMLProps<HTMLTableElement>;
      tbody: HTMLProps<HTMLTableSectionElement>;
      td: HTMLProps<HTMLTableDataCellElement>;
      textarea: HTMLProps<HTMLTextAreaElement>;
      tfoot: HTMLProps<HTMLTableSectionElement>;
      th: HTMLProps<HTMLTableHeaderCellElement>;
      thead: HTMLProps<HTMLTableSectionElement>;
      time: HTMLProps<HTMLElement>;
      title: HTMLProps<HTMLTitleElement>;
      tr: HTMLProps<HTMLTableRowElement>;
      track: HTMLProps<HTMLTrackElement>;
      u: HTMLProps<HTMLElement>;
      ul: HTMLProps<HTMLUListElement>;
      "var": HTMLProps<HTMLElement>;
      video: HTMLProps<HTMLVideoElement>;
      wbr: HTMLProps<HTMLElement>;

      slot: HTMLProps<HTMLSlotElement> & { name?: string };

      // SVG
      svg: SVGAttributes;

      circle: SVGAttributes;
      clipPath: SVGAttributes;
      defs: SVGAttributes;
      ellipse: SVGAttributes;
      feBlend: SVGAttributes;
      feColorMatrix: SVGAttributes;
      feComponentTransfer: SVGAttributes;
      feComposite: SVGAttributes;
      feConvolveMatrix: SVGAttributes;
      feDiffuseLighting: SVGAttributes;
      feDisplacementMap: SVGAttributes;
      feFlood: SVGAttributes;
      feGaussianBlur: SVGAttributes;
      feImage: SVGAttributes;
      feMerge: SVGAttributes;
      feMergeNode: SVGAttributes;
      feMorphology: SVGAttributes;
      feOffset: SVGAttributes;
      feSpecularLighting: SVGAttributes;
      feTile: SVGAttributes;
      feTurbulence: SVGAttributes;
      filter: SVGAttributes;
      foreignObject: SVGAttributes;
      g: SVGAttributes;
      image: SVGAttributes;
      line: SVGAttributes;
      linearGradient: SVGAttributes;
      marker: SVGAttributes;
      mask: SVGAttributes;
      path: SVGAttributes;
      pattern: SVGAttributes;
      polygon: SVGAttributes;
      polyline: SVGAttributes;
      radialGradient: SVGAttributes;
      rect: SVGAttributes;
      stop: SVGAttributes;
      symbol: SVGAttributes;
      text: SVGAttributes;
      tspan: SVGAttributes;
      use: SVGAttributes;
    }

    // interfaces etc
    // export type HTMLProps<T extends Element> = Partial<T> & HyperscriptEventHandler<T> & HTMLAttributes<T> & SVGAttributes;
    export interface HTMLProps<T extends Element> extends HyperscriptEventHandler<T>, HTMLAttributes<T>, SVGAttributes {}
    export interface HyperscriptEventHandler<T> {
      onAbort?: typeof HTMLElement.prototype.onabort;
      onActivate?: typeof HTMLElement.prototype.onactivate;
      onBeforeactivate?: typeof HTMLElement.prototype.onbeforeactivate;
      onBeforecopy?: typeof HTMLElement.prototype.onbeforecopy;
      onBeforecut?: typeof HTMLElement.prototype.onbeforecut;
      onBeforedeactivate?: typeof HTMLElement.prototype.onbeforedeactivate;
      onBeforepaste?: typeof HTMLElement.prototype.onbeforepaste;
      onBlur?: typeof HTMLElement.prototype.onblur;
      onCanplay?: typeof HTMLElement.prototype.oncanplay;
      onCanplaythrough?: typeof HTMLElement.prototype.oncanplaythrough;
      onChange?: typeof HTMLElement.prototype.onchange;
      onClick?: typeof HTMLElement.prototype.onclick;
      onContextmenu?: typeof HTMLElement.prototype.oncontextmenu;
      onCopy?: typeof HTMLElement.prototype.oncopy;
      onCuechange?: typeof HTMLElement.prototype.oncuechange;
      onCut?: typeof HTMLElement.prototype.oncut;
      onDblclick?: typeof HTMLElement.prototype.ondblclick;
      onDeactivate?: typeof HTMLElement.prototype.ondeactivate;
      onDrag?: typeof HTMLElement.prototype.ondrag;
      onDragend?: typeof HTMLElement.prototype.ondragend;
      onDragenter?: typeof HTMLElement.prototype.ondragenter;
      onDragleave?: typeof HTMLElement.prototype.ondragleave;
      onDragover?: typeof HTMLElement.prototype.ondragover;
      onDragstart?: typeof HTMLElement.prototype.ondragstart;
      onDrop?: typeof HTMLElement.prototype.ondrop;
      onDurationchange?: typeof HTMLElement.prototype.ondurationchange;
      onEmptied?: typeof HTMLElement.prototype.onemptied;
      onEnded?: typeof HTMLElement.prototype.onended;
      onError?: typeof HTMLElement.prototype.onerror;
      onFocus?: typeof HTMLElement.prototype.onfocus;
      onInput?: typeof HTMLElement.prototype.oninput;
      onInvalid?: typeof HTMLElement.prototype.oninvalid;
      onKeydown?: typeof HTMLElement.prototype.onkeydown;
      onKeypress?: typeof HTMLElement.prototype.onkeypress;
      onKeyup?: typeof HTMLElement.prototype.onkeyup;
      onLoad?: typeof HTMLElement.prototype.onload;
      onLoadeddata?: typeof HTMLElement.prototype.onloadeddata;
      onLoadedmetadata?: typeof HTMLElement.prototype.onloadedmetadata;
      onLoadstart?: typeof HTMLElement.prototype.onloadstart;
      onMousedown?: typeof HTMLElement.prototype.onmousedown;
      onMouseenter?: typeof HTMLElement.prototype.onmouseenter;
      onMouseleave?: typeof HTMLElement.prototype.onmouseleave;
      onMousemove?: typeof HTMLElement.prototype.onmousemove;
      onMouseout?: typeof HTMLElement.prototype.onmouseout;
      onMouseover?: typeof HTMLElement.prototype.onmouseover;
      onMouseup?: typeof HTMLElement.prototype.onmouseup;
      onMousewheel?: typeof HTMLElement.prototype.onmousewheel;
      onMscontentzoom?: typeof HTMLElement.prototype.onmscontentzoom;
      onMsmanipulationstatechanged?: typeof HTMLElement.prototype.onmsmanipulationstatechanged;
      onPaste?: typeof HTMLElement.prototype.onpaste;
      onPause?: typeof HTMLElement.prototype.onpause;
      onPlay?: typeof HTMLElement.prototype.onplay;
      onPlaying?: typeof HTMLElement.prototype.onplaying;
      onProgress?: typeof HTMLElement.prototype.onprogress;
      onRatechange?: typeof HTMLElement.prototype.onratechange;
      onReset?: typeof HTMLElement.prototype.onreset;
      onScroll?: typeof HTMLElement.prototype.onscroll;
      onSeeked?: typeof HTMLElement.prototype.onseeked;
      onSeeking?: typeof HTMLElement.prototype.onseeking;
      onSelect?: typeof HTMLElement.prototype.onselect;
      onSelectstart?: typeof HTMLElement.prototype.onselectstart;
      onStalled?: typeof HTMLElement.prototype.onstalled;
      onSubmit?: typeof HTMLElement.prototype.onsubmit;
      onSuspend?: typeof HTMLElement.prototype.onsuspend;
      onTimeupdate?: typeof HTMLElement.prototype.ontimeupdate;
      onVolumechange?: typeof HTMLElement.prototype.onvolumechange;
      onWaiting?: typeof HTMLElement.prototype.onwaiting;
    }
  }
}

type Key = string | number;
type Ref<T> = string | ((instance: T) => any);
type ComponentState = {} | void;

interface SkateHTMLAttributes {
  // dangerouslySetInnerHTML?:DangerouslySetInnerHTML;
  key?:string;
  ref?:(el?: Element) => void;
}
interface Attributes {
  key?: Key;
}
interface ClassAttributes<T> extends Attributes {
  ref?: Ref<T>;
}

// interface HTMLProps<T> extends HTMLAttributes<T>, ClassAttributes<T> {
// }

interface SVGAttributes {
  clipPath?:string;
  cx?:number | string;
  cy?:number | string;
  d?:string;
  dx?:number | string;
  dy?:number | string;
  fill?:string;
  fillOpacity?:number | string;
  fontFamily?:string;
  fontSize?:number | string;
  fx?:number | string;
  fy?:number | string;
  gradientTransform?:string;
  gradientUnits?:string;
  markerEnd?:string;
  markerMid?:string;
  markerStart?:string;
  offset?:number | string;
  opacity?:number | string;
  patternContentUnits?:string;
  patternUnits?:string;
  points?:string;
  preserveAspectRatio?:string;
  r?:number | string;
  rx?:number | string;
  ry?:number | string;
  spreadMethod?:string;
  stopColor?:string;
  stopOpacity?:number | string;
  stroke?:string;
  strokeDasharray?:string;
  strokeLinecap?:string;
  strokeMiterlimit?:string;
  strokeOpacity?:number | string;
  strokeWidth?:number | string;
  textAnchor?:string;
  transform?:string;
  version?:string;
  viewBox?:string;
  x1?:number | string;
  x2?:number | string;
  x?:number | string;
  xlinkActuate?:string;
  xlinkArcrole?:string;
  xlinkHref?:string;
  xlinkRole?:string;
  xlinkShow?:string;
  xlinkTitle?:string;
  xlinkType?:string;
  xmlBase?:string;
  xmlLang?:string;
  xmlSpace?:string;
  y1?:number | string;
  y2?:number | string;
  y?:number | string;
}

interface PathAttributes {
  d:string;
}


interface HTMLAttributes<T> extends /*DOMAttributes<T>,*/ SkateHTMLAttributes {
  slot?: string,

  // Standard HTML Attributes
  accept?:string;
  acceptCharset?:string;
  accessKey?:string;
  action?:string;
  allowFullScreen?:boolean;
  allowTransparency?:boolean;
  alt?:string;
  async?:boolean;
  autocomplete?:string;
  autofocus?:boolean;
  autoPlay?:boolean;
  capture?:boolean;
  cellPadding?:number | string;
  cellSpacing?:number | string;
  charSet?:string;
  challenge?:string;
  checked?:boolean;
  class?:string | { [key:string]: boolean };
  className?:string | { [key:string]: boolean };
  cols?:number;
  colSpan?:number;
  content?:string;
  contentEditable?:boolean;
  contextMenu?:string;
  controls?:boolean;
  coords?:string;
  crossOrigin?:string;
  data?:string;
  dateTime?:string;
  default?:boolean;
  defer?:boolean;
  dir?:string;
  disabled?:boolean;
  download?:any;
  draggable?:boolean;
  encType?:string;
  form?:string;
  formAction?:string;
  formEncType?:string;
  formMethod?:string;
  formNoValidate?:boolean;
  formTarget?:string;
  frameBorder?:number | string;
  headers?:string;
  height?:number | string;
  hidden?:boolean;
  high?:number;
  href?:string;
  hrefLang?:string;
  for?:string;
  httpEquiv?:string;
  icon?:string;
  id?:string;
  inputMode?:string;
  integrity?:string;
  is?:string;
  keyParams?:string;
  keyType?:string;
  kind?:string;
  label?:string;
  lang?:string;
  list?:string;
  loop?:boolean;
  low?:number;
  manifest?:string;
  marginHeight?:number;
  marginWidth?:number;
  max?:number | string;
  maxLength?:number;
  media?:string;
  mediaGroup?:string;
  method?:string;
  min?:number | string;
  minLength?:number;
  multiple?:boolean;
  muted?:boolean;
  name?:string;
  noValidate?:boolean;
  open?:boolean;
  optimum?:number;
  pattern?:string;
  placeholder?:string;
  poster?:string;
  preload?:string;
  radioGroup?:string;
  readOnly?:boolean;
  rel?:string;
  required?:boolean;
  role?:string;
  rows?:number;
  rowSpan?:number;
  sandbox?:string;
  scope?:string;
  scoped?:boolean;
  scrolling?:string;
  seamless?:boolean;
  selected?:boolean;
  shape?:string;
  size?:number;
  sizes?:string;
  span?:number;
  spellCheck?:boolean;
  src?:string;
  srcset?:string;
  srcDoc?:string;
  srcLang?:string;
  srcSet?:string;
  start?:number;
  step?:number | string;
  style?:any;
  summary?:string;
  tabIndex?:number;
  target?:string;
  title?:string;
  type?:string;
  useMap?:string;
  value?:string | string[];
  width?:number | string;
  wmode?:string;
  wrap?:string;

  // RDFa Attributes
  about?:string;
  datatype?:string;
  inlist?:any;
  prefix?:string;
  property?:string;
  resource?:string;
  typeof?:string;
  vocab?:string;
}

interface DOMAttributes<T> {

  // Clipboard Events
  onCopy?: ClipboardEventHandler<T>;
  onCut?: ClipboardEventHandler<T>;
  onPaste?: ClipboardEventHandler<T>;

  // Composition Events
  onCompositionEnd?: CompositionEventHandler<T>;
  onCompositionStart?: CompositionEventHandler<T>;
  onCompositionUpdate?: CompositionEventHandler<T>;

  // Focus Events
  onFocus?: FocusEventHandler<T>;
  onBlur?: FocusEventHandler<T>;

  // Form Events
  onChange?: FormEventHandler<T>;
  onInput?: FormEventHandler<T>;
  onSubmit?: FormEventHandler<T>;

  // Image Events
  onLoad?: ReactEventHandler<T>;
  onError?: ReactEventHandler<T>; // also a Media Event

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<T>;
  onKeyPress?: KeyboardEventHandler<T>;
  onKeyUp?: KeyboardEventHandler<T>;

  // Media Events
  onAbort?: ReactEventHandler<T>;
  onCanPlay?: ReactEventHandler<T>;
  onCanPlayThrough?: ReactEventHandler<T>;
  onDurationChange?: ReactEventHandler<T>;
  onEmptied?: ReactEventHandler<T>;
  onEncrypted?: ReactEventHandler<T>;
  onEnded?: ReactEventHandler<T>;
  onLoadedData?: ReactEventHandler<T>;
  onLoadedMetadata?: ReactEventHandler<T>;
  onLoadStart?: ReactEventHandler<T>;
  onPause?: ReactEventHandler<T>;
  onPlay?: ReactEventHandler<T>;
  onPlaying?: ReactEventHandler<T>;
  onProgress?: ReactEventHandler<T>;
  onRateChange?: ReactEventHandler<T>;
  onSeeked?: ReactEventHandler<T>;
  onSeeking?: ReactEventHandler<T>;
  onStalled?: ReactEventHandler<T>;
  onSuspend?: ReactEventHandler<T>;
  onTimeUpdate?: ReactEventHandler<T>;
  onVolumeChange?: ReactEventHandler<T>;
  onWaiting?: ReactEventHandler<T>;

  // MouseEvents
  onClick?: MouseEventHandler<T>;
  onContextMenu?: MouseEventHandler<T>;
  onDoubleClick?: MouseEventHandler<T>;
  onDrag?: DragEventHandler<T>;
  onDragEnd?: DragEventHandler<T>;
  onDragEnter?: DragEventHandler<T>;
  onDragExit?: DragEventHandler<T>;
  onDragLeave?: DragEventHandler<T>;
  onDragOver?: DragEventHandler<T>;
  onDragStart?: DragEventHandler<T>;
  onDrop?: DragEventHandler<T>;
  onMouseDown?: MouseEventHandler<T>;
  onMouseEnter?: MouseEventHandler<T>;
  onMouseLeave?: MouseEventHandler<T>;
  onMouseMove?: MouseEventHandler<T>;
  onMouseOut?: MouseEventHandler<T>;
  onMouseOver?: MouseEventHandler<T>;
  onMouseUp?: MouseEventHandler<T>;

  // Selection Events
  onSelect?: ReactEventHandler<T>;

  // Touch Events
  onTouchCancel?: TouchEventHandler<T>;
  onTouchEnd?: TouchEventHandler<T>;
  onTouchMove?: TouchEventHandler<T>;
  onTouchStart?: TouchEventHandler<T>;

  // UI Events
  onScroll?: UIEventHandler<T>;

  // Wheel Events
  onWheel?: WheelEventHandler<T>;

  // Animation Events
  onAnimationStart?: AnimationEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  onAnimationIteration?: AnimationEventHandler;

  // Transition Events
  onTransitionEnd?: TransitionEventHandler;
}


// @TODO THIS IS REACT THINGY, REMOVE THIS MISTER
interface SyntheticEvent<T> {
  bubbles: boolean;
  currentTarget: EventTarget & T;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}

interface ClipboardEvent<T> extends SyntheticEvent<T> {
  clipboardData: DataTransfer;
}

interface CompositionEvent<T> extends SyntheticEvent<T> {
  data: string;
}

interface DragEvent<T> extends MouseEvent<T> {
  dataTransfer: DataTransfer;
}

interface FocusEvent<T> extends SyntheticEvent<T> {
  relatedTarget: EventTarget;
}

interface FormEvent<T> extends SyntheticEvent<T> {
}

interface KeyboardEvent<T> extends SyntheticEvent<T> {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  key: string;
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  which: number;
}

interface MouseEvent<T> extends SyntheticEvent<T> {
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  metaKey: boolean;
  pageX: number;
  pageY: number;
  relatedTarget: EventTarget;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
}

interface TouchEvent<T> extends SyntheticEvent<T> {
  altKey: boolean;
  changedTouches: TouchList;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  metaKey: boolean;
  shiftKey: boolean;
  targetTouches: TouchList;
  touches: TouchList;
}

interface UIEvent<T> extends SyntheticEvent<T> {
  detail: number;
  // view: AbstractView;
}

interface WheelEvent<T> extends MouseEvent<T> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}

interface AnimationEvent extends SyntheticEvent<{}> {
  animationName: string;
  pseudoElement: string;
  elapsedTime: number;
}

interface TransitionEvent extends SyntheticEvent<{}> {
  propertyName: string;
  pseudoElement: string;
  elapsedTime: number;
}

interface EventHandler<E extends SyntheticEvent<any>> {
  (event: E): void;
}

// TODO naming
type ReactEventHandler<T> = EventHandler<SyntheticEvent<T>>;

type ClipboardEventHandler<T> = EventHandler<ClipboardEvent<T>>;
type CompositionEventHandler<T> = EventHandler<CompositionEvent<T>>;
type DragEventHandler<T> = EventHandler<DragEvent<T>>;
type FocusEventHandler<T> = EventHandler<FocusEvent<T>>;
type FormEventHandler<T> = EventHandler<FormEvent<T>>;
type KeyboardEventHandler<T> = EventHandler<KeyboardEvent<T>>;
type MouseEventHandler<T> = EventHandler<MouseEvent<T>>;
type TouchEventHandler<T> = EventHandler<TouchEvent<T>>;
type UIEventHandler<T> = EventHandler<UIEvent<T>>;
type WheelEventHandler<T> = EventHandler<WheelEvent<T>>;
type AnimationEventHandler = EventHandler<AnimationEvent>;
type TransitionEventHandler = EventHandler<TransitionEvent>;
