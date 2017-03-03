import { GenericTypes, customElement } from '@blaze-elements/common';
import RawCard, { CardProps, Props, Events } from './Card';
import RawCardItem, { CardItemProps, Props as PropsCardItem, Events as EventsCardItem } from './CardItem';

const Card = customElement( 'bl-card' )( RawCard ) as typeof RawCard;
const CardItem = customElement( 'bl-card-item' )( RawCardItem ) as typeof RawCardItem;

export { Card, CardItem };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-card': GenericTypes.IntrinsicCustomElement<CardProps>
      & GenericTypes.IntrinsicBoreElement<Props, Events>
      'bl-card-item': GenericTypes.IntrinsicCustomElement<CardItemProps>
      & GenericTypes.IntrinsicBoreElement<PropsCardItem, EventsCardItem>
    }
  }
}
