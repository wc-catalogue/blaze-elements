import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { GenericTypes } from '../_helpers';
import { prop } from '../_helpers/decorators';
import { css } from '../_helpers/css';

export type CardItemProps = Props;

export type Props = {
  selected?: boolean,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-card-item': GenericTypes.IntrinsicCustomElement<CardItemProps> & GenericTypes.IntrinsicBoreElement<Props, void>
    }
  }
}


export class CardItem extends Component<CardItemProps> {
  static get is() { return 'bl-card-item'; }

  @prop( { type: Boolean } ) selected: boolean;

  renderCallback() {
    const { selected } = this;
    const className = css(
      'c-card__item',
      {
        'c-card__item--active': selected
      } );
    return [
      <style>{styles}</style>,
      <div className={className}>
        <slot />
      </div>
    ];
  }
}

customElements.define( CardItem.is, CardItem );
