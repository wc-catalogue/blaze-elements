declare module '*.scss' {
  const _:string;
  export default _;
};
declare module '*.css' {
  const _:string;
  export default _;
};
declare module '*.json';
declare module '*.gif';

// Skate
declare module 'core-js';

// Decko
declare module 'decko' {
  /**
   *
   */
  export const bind: MethodDecorator
  /**
   * @param caseSensitive Makes cache keys case-insensitive
   * @param cache Presupply cache storage, for seeding or sharing entries
   */
  export function memoize(caseSensitive?: boolean, cache: Object): MethodDecorator
  /**
   * @param delay number
   */
  export function debounce(delay?: number): MethodDecorator
}

declare namespace JSX {
  interface IntrinsicElement extends ShadyCSS.IntrinsicElements {
  }
}
declare namespace ShadyCSS {
    interface IntrinsicElements {
      'custom-style': HTMLElement,
    }

    interface ShadyCssStatic {
      prepareTemplate( template: HTMLTemplateElement, elementName: string, typeExtension?: string),
      applyStyle( host: HTMLElement, overrideProps?: {[propName: string]: string}),
      updateStyles(properties?: {[propName: string]: string}),
    }
}


// Custom Elements
declare const customElements: CustomElementRegistry;

interface CustomElementRegistry {
  define(
    name: string, constructor: Function,
    options?: ElementDefinitionOptions): void;
  get(name: string): any;
  whenDefined(name: string): Promise<void>;
  flush(): void;
}

interface ElementDefinitionOptions {
  extends: string;
}

interface ElementCreationOptions {
  is: string;
}

interface Window {
  customElements: CustomElementRegistry;
  ShadyCSS: ShadyCSS.ShadyCssStatic,
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
  readonly observedAttributes: string[] | void;
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

interface Document extends DocumentOrShadowRoot { }
interface ShadowRoot extends DocumentOrShadowRoot { }

interface CaretPosition { }

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
// we are not using Chai anymore. We use Expect which has Jest style assertions
// @TODO remove this once all test are refactored to use `expect` instead of chai
declare var expect: Chai.ExpectStatic;
