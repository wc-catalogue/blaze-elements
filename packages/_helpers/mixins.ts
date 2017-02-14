import { prop, ComponentProps, Component } from 'skatejs';
import { ColorType } from './colorTypes';
import { IS_DEV } from './environment';

const { attachShadow } = HTMLElement.prototype;
const { ShadyCSS } = window;
const $template = Symbol();
const nativeShadowDomSupport = attachShadow && attachShadow.toString().indexOf('native code') > -1;


/** Any type that can construct *something*. */
// export type Constructable<T> = new (...args: any[]) => T;
export interface Constructable<T> {
  readonly props: ComponentProps<any, any>;
  readonly observedAttributes: string[];
  new ( ...args: any[] ): T,
}

export type ColoredProps = {
  color?: ColorType,
};
export function Colored<BC extends Constructable<{}>>( Base: BC ) {
  return class Colored extends Base {
    static get props(): ComponentProps<Colored, ColoredProps> {
      return {
        ...super.props,
        color: prop.string<any, ColorType>( { attribute: { source: true } } )
      };
    }
    color?: ColorType;
  };
}

export type DisabledProps = {
  disabled?: boolean,
};
export function Disabled<BC extends Constructable<{}>>( Base: BC ) {
  return class extends Base {
    static get props(): ComponentProps<any, DisabledProps> {
      return {
        ...super.props,
        disabled: prop.boolean( { attribute: true } )
      };
    }
    disabled?: boolean;
  };
}



export function Css<BC extends Constructable<{}>>( Base: BC) {
  return class extends Base {
      readonly css: string;

      get shadyCss() {
        if (IS_DEV && !('css' in this)) {
          throw new Error(`you have to implement 'css' property when using 'Css' Mixin!`);
        }
        return scopeCss(this as any, this.css);
      }

  };

}

function scopeCss (elem: Component<any> & {[key: string]: any}, css: string): string | void {
  if (nativeShadowDomSupport) {
    return css;
  }
  const template = elem[$template] || (elem[$template] = document.createElement('template'));
  template.innerHTML = `<style>${css}</style>`;
  ShadyCSS.prepareTemplate(template, elem.localName);
}
