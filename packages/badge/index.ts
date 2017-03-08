import { customElement, GenericTypes } from '@blaze-elements/common';

import RawBadge, { BadgeProps, Props, Events } from './Badge';
const Badge = customElement( 'bl-badge' )( RawBadge ) as typeof RawBadge;

export { Badge };

// extend JSX.IntrinsicElements namespace with our definition
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-badge': GenericTypes.IntrinsicCustomElement<BadgeProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}
