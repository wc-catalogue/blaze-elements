import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { prop, css } from '@blaze-elements/common';

export type CardItemProps = Props;

export type Props = {
  selected?: boolean,
};


export default class CardItem extends Component<CardItemProps> {

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
