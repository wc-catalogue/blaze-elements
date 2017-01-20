declare module '*.scss';
declare module '*.css';
declare module '*.json';

// Skate
declare module 'skatejs-web-components';
declare module 'core-js';

// Bore
declare module 'bore' {

  interface BoreNode extends HTMLElement {
  }
  interface WrappedNode extends Wrapper {
    node: BoreNode,
  }
  type Query<T> = string | JSX.Element | T | ( ( node: BoreNode ) => boolean ) | Object;

  interface Wrapper {
    all<T extends HTMLElement>( query: Query<T> ): WrappedNode[],
    one<T extends HTMLElement>( query: Query<T> ): WrappedNode,
    has<T extends HTMLElement>( query: Query<T> ): boolean,

    wait( callback?: ( wrapper: WrappedNode ) => any ): Promise<any>,
    waitFor( callback: ( wrapper: WrWrappedNode ) => boolean, options?: { delay?: number }): Promise<Wrapper>,
  }
  export function mount( htmlOrNode: JSX.Element | JSX.Element[] | string ): Wrapper
  export function h( name: string, attrsOrProps?: Object, ...children: any[] ): JSX.Element | JSX.Element[]

};


// Custom Elements
declare const customElements: CustomElementRegistry;

interface CustomElementRegistry {
  define(
      name: string, constructor: Function,
      options?: ElementDefinitionOptions): void;
  get(name: string): any;
  whenDefined(name: string): Promise<void>;
}

interface ElementDefinitionOptions {
  extends: string;
}

interface ElementCreationOptions {
  is: string;
}

interface Window {
  customElements: CustomElementRegistry;
}

interface Document {
  createElement(name: string, options: ElementCreationOptions): HTMLElement;
}

interface HTMLElement extends OnConnectedCallback, OnDisconnectedCallback, OnAdoptedCallback, OnAttributeChangedCallback {
//   // shadow DOM API
//   shadowRoot: HTMLElement,
//   attachShadow( { mode:string } ): HTMLElement,
//   assignedNodes( { flatten }?:{flatten?: boolean} ): NodeList,
//   assignedSlot: string|void,
  // @FIXME remove this once https://github.com/skatejs/skatejs/pull/1022 is merged
  role?: string,
}

interface HasAttributes {
  readonly observedAttributes: string[]|void;
}

interface OnConnectedCallback {
  connectedCallback(): void;
}

interface OnDisconnectedCallback {
  disconnectedCallback(): void;
}

interface OnAdoptedCallback {
  adoptedCallback(oldDocument: any, newDocument: any): void;
}

interface OnAttributeChangedCallback {
  attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}

// ShadowDom

interface DocumentOrShadowRoot {
  getSelection(): Selection;
  elementFromPoint(x: number, y: number): Element | null;
  elementsFromPoint(x: number, y: number): Element[];
  caretPositionFromPoint(x: number, y: number): CaretPosition | null;
  readonly activeElement: Element | null;
  readonly styleSheets: StyleSheetList | null;
}

interface Document extends DocumentOrShadowRoot {}
interface ShadowRoot extends DocumentOrShadowRoot {}

interface CaretPosition {}

interface ShadowRoot extends DocumentFragment {
  readonly host: Element;
  innerHTML: string;
}

interface Element {
  attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
  readonly assignedSlot: HTMLSlotElement | null;
  slot: string;
  readonly shadowRoot: ShadowRoot | null;
}

interface ShadowRootInit {
  mode: ShadowRootMode;
  delegatesFocus?: boolean;  // default false
}

type ShadowRootMode = 'open' | 'closed';

interface Text {
  readonly assignedSlot: HTMLSlotElement | null;
}

interface HTMLSlotElement extends HTMLElement {
  name: string;
  assignedNodes(options?: AssignedNodesOptions): Node[];
}

interface AssignedNodesOptions {
  flatten?: boolean;  // default false
}

interface EventInit {
  scoped?: boolean;  // default false
}

interface Event {
  deepPath(): EventTarget[];
  readonly scoped: boolean;
}

interface Document {
  createElement(tagName: 'slot'): HTMLSlotElement;
}

// Tests
declare var expect: Chai.ExpectStatic;
