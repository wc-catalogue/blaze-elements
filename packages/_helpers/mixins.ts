import { prop, ComponentProps } from 'skatejs';
import { ColorType } from './colorTypes';


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
