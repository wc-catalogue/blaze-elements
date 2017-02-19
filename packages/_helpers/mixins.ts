import { prop, ComponentProps } from 'skatejs';
import { ColorType } from './colorTypes';
import { IS_DEV } from './environment';
import { scopeCss, Constructable } from './utils';



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


