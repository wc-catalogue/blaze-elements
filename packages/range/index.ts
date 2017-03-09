
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawRange, { RangeProps, Attrs, Events } from './Range';

const Range = customElement( 'bl-range' )( RawRange ) as typeof RawRange;

export {
  Range
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-range': GenericTypes.IntrinsicCustomElement<RangeProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
