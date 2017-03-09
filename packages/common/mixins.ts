import { ColorType } from './colorTypes';
import { IS_DEV } from './environment';
import { scopeCss, Constructable } from './utils';
import { prop } from './decorators';
import { MixinClass } from './static-definitions/types';

export type ColoredProps = {
  color?: ColorType,
};
export function Colored<BC extends Constructable<{}>>( Base: BC ): MixinClass<BC, ColoredProps> {
  class ColoredCmp extends Base {
    @prop( { type: String, attribute: { source: true } } ) color?: ColorType;
  }

  return ColoredCmp;
}

export type DisabledProps = {
  disabled?: boolean,
};
export function Disabled<BC extends Constructable<{}>>( Base: BC ): MixinClass<BC, DisabledProps> {
  class DisabledCmp extends Base {
    @prop( { type: Boolean, attribute: true } ) disabled?: boolean;
  }

  return DisabledCmp;
}


export type CssProps = {
  readonly css: string,
  readonly shadyCss: void | string,
};
export function Css<BC extends Constructable<{}>>( Base: BC ): MixinClass<BC, CssProps> {
  return class extends Base {
    readonly css: string;

    get shadyCss() {
      if ( IS_DEV && !( 'css' in this ) ) {
        throw new Error( `you have to implement 'css' property when using 'Css' Mixin!` );
      }
      return scopeCss( this as any, this.css );
    }

  };

}


