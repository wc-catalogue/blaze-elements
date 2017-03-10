import { customElement, GenericTypes } from '@blaze-elements/common';

import RawBubble, { BubbleProps, Events, Props } from './Bubble';
const Bubble = customElement( 'bl-bubble' )( RawBubble ) as typeof RawBubble;

export { Bubble };

// extend JSX.IntrinsicElements namespace with our definition
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-bubble': GenericTypes.IntrinsicCustomElement<BubbleProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}
