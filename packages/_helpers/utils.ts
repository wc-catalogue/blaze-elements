import { Component, ComponentProps } from 'skatejs';
import { hasNativeShadowDomSupport } from './environment';

const $template = Symbol();

/** Any type that can construct *something*. */
// export type Constructable<T> = new (...args: any[]) => T;
export interface Constructable<T> {
  readonly props: ComponentProps<any, any>;
  readonly observedAttributes: string[];
  readonly is: string;
  new ( ...args: any[] ): T,
}

export function scopeCss (elem: Component<any> & {[key: string]: any}, css: string): string | void {
  if (hasNativeShadowDomSupport) {
    return css;
  }
  const template = elem[$template] || (elem[$template] = document.createElement('template'));
  template.innerHTML = `<style>${css}</style>`;
  window.ShadyCSS.prepareTemplate(template, elem.localName);
}
