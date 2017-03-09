
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawAccordion, { AccordionProps, Attrs, Events } from './Accordion';

const Accordion = customElement( 'bl-accordion' )( RawAccordion ) as typeof RawAccordion;

export {
  Accordion
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-accordion': GenericTypes.IntrinsicCustomElement<AccordionProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
