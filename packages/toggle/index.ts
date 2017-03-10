
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawToggle, { Attrs, Events, ToggleProps } from './Toggle';

const Toggle = customElement( 'bl-toggle' )( RawToggle ) as typeof RawToggle;

export {
  Toggle
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-toggle': GenericTypes.IntrinsicCustomElement<ToggleProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
