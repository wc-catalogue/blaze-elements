export const vdom: any;

type PropData = { [prop: string]: any };
export function props(elem: any): PropData;
export function props(elem: any, data?: PropData): void;

export const emit: (elem: any, eventName: string, eventOptions = {}) => boolean;

interface ComponentProps {
  children?: JSX.Element[];
  key?: string;
}
interface ComponentLifecycle<PropsType> {
  // Custom Elements v1
  connectedCallback?(): void,
  disconnectedCallback?(): void,
  attributeChangedCallback?(name: string, oldValue: any, newValue: any): void,

  // SkateJS
  updatedCallback?(prev: PropsType): boolean,
  renderedCallback?(): void,
}
interface ComponentConstructor<Props> {
  new (props?:Props): Component<Props>;
}
export class Component<Props> extends HTMLElement implements ComponentLifecycle<Props> {
  _props: Props & ComponentProps;
  static readonly props: { [name: string]: PropOptions };
  static readonly observedAttributes: string[];

  // SkateJS
  abstract renderCallback(): JSX.Element | JSX.Element[] | null
}

export function define<C>(name: string, component: C): C;

export function define<Proto, Props>(name: string, definition: {
  prototype: Proto;
  props: Props;
  constructor?(elem: Component<any> & Proto & Props): any;
  updatedCallback?(elem: Component<any> & Proto & Props, prevProps: { [name: string]: any }): boolean | undefined;
  renderCallback?(elem: Component<any> & Proto & Props): () => any | undefined;
  renderedCallback?(elem: Component<any> & Proto & Props): any;
  connectedCallback?(elem: Component<any> & Proto & Props): any;
  disconnectedCallback?(elem: Component<any> & Proto & Props): any;
  attributeChangedCallback?(elem: Component<any> & Proto & Props, data: { name: string, oldValue: any, newValue: any }): any;
  observedAttributes?: string[];
}): { new(...args: any[]): Component<any> & Proto & Props };

export const symbols: {
  shadowRoot: string | symbol;
  name: string | symbol;
};

export const ready: (elem: HTMLElement, callback: (...args: any[]) => any) => void;

type HOut = JSX.Element;
type HBuilder<Props> = (
  nodeName: string | ComponentConstructor<Props>,
  attributes?: JSX.HTMLAttributes & JSX.SVGAttributes & {[propName: string]: any},
  ...children?: (JSX.Element|JSX.Element[]|string)[] | null
) => HOut;

export interface HNode {
  nodeName: string | ComponentConstructor<any>;
  attributes: {[name: string]: any};
  children: HNode[];
  key?: string;
}
export const h: HBuilder;

export const builder: (...args: string[]) => HBuilder[];

type PropOptions = {
  attribute?: boolean | string;
  coerce?: (value: any) => any;
  default?: undefined | null | boolean | string | ((elem: any, data: { name: string }) => any);
  deserialize?: (value: string) => any;
  get?: (elem: any, data: { name: string, internalValue: any }) => any;
  initial?: undefined | null | boolean | string | ((elem: any, data: { name: string }) => any);
  serialize?: (value: any) => string;
  set?: (elem: any, data: { name: string, newValue: any, oldValue: any }) => void;
};

export const prop: {
  boolean(options?: PropOptions): PropOptions;
  number(options?: PropOptions): PropOptions;
  string(options?: PropOptions): PropOptions;
  array(options?: PropOptions): PropOptions;
};
