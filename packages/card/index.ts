import { GenericTypes, customElement } from '@blaze-elements/common';
import { CardItemProps } from './CardItem';

import RawCard from './Card';
import RawCardItem from './CardItem';

const Card = customElement( 'bl-card' )( RawCard ) as typeof RawCard;
const CardItem = customElement( 'bl-card-item' )( RawCardItem ) as typeof RawCardItem;

export {
  Card,
  CardItem
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-card': GenericTypes.IntrinsicCustomElement<void>;
      'bl-card-item': GenericTypes.IntrinsicCustomElement<CardItemProps>;
    }
  }
}
