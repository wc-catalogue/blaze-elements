
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawCollapsible, { CollapsibleProps, Attrs, Events } from './Collapsible';

const Collapsible = customElement( 'bl-collapsible' )( RawCollapsible ) as typeof RawCollapsible;

export {
  Collapsible
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-collapsible': GenericTypes.IntrinsicCustomElement<CollapsibleProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
