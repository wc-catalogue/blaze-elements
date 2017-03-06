import { customElement, GenericTypes } from '@blaze-elements/common';
import RawCard, {
  CardProps,
  Props,
  Events
} from './Card';
import RawCardContent, {
  CardContentProps,
  Props as PropsCardContent,
  Events as EventsCardContent
} from './CardContent';
import RawCardItem, {
  CardItemProps,
  Props as PropsCardItem,
  Events as EventsCardItem
} from './CardItem';
import RawCardHeader, {
  CardHeaderProps,
  Props as PropsCardHeader,
  Events as EventsCardHeader
} from './CardHeader';
import RawCardFooter, {
  CardFooterProps,
  Props as PropsCardFooter,
  Events as EventsCardFooter
} from './CardFooter';

const Card = customElement( 'bl-card' )( RawCard ) as typeof RawCard;
const CardContent = customElement( 'bl-card-content' )( RawCardContent ) as typeof RawCardContent;
const CardItem = customElement( 'bl-card-item' )( RawCardItem ) as typeof RawCardItem;
const CardHeader = customElement( 'bl-card-header' )( RawCardHeader ) as typeof RawCardHeader;
const CardFooter = customElement( 'bl-card-footer' )( RawCardFooter ) as typeof RawCardFooter;

export { Card, CardContent, CardItem, CardHeader, CardFooter };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-card': GenericTypes.IntrinsicCustomElement<CardProps>
      & GenericTypes.IntrinsicBoreElement<Props, Events>,
      'bl-card-content': GenericTypes.IntrinsicCustomElement<CardContentProps>
      & GenericTypes.IntrinsicBoreElement<PropsCardContent, EventsCardContent>,
      'bl-card-item': GenericTypes.IntrinsicCustomElement<CardItemProps>
      & GenericTypes.IntrinsicBoreElement<PropsCardItem, EventsCardItem>,
      'bl-card-header': GenericTypes.IntrinsicCustomElement<CardHeaderProps>
      & GenericTypes.IntrinsicBoreElement<PropsCardHeader, EventsCardHeader>,
      'bl-card-footer': GenericTypes.IntrinsicCustomElement<CardFooterProps>
      & GenericTypes.IntrinsicBoreElement<PropsCardFooter, EventsCardFooter>,
    }
  }
}
