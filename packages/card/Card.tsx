import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { shadyCssStyles } from '@blaze-elements/common';

export type CardProps = Props;
export type Props = {};
export type Events = {};

@shadyCssStyles()
export default class Card extends Component<CardProps> {

  get css() { return styles; }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <div class="c-card">

        <slot />

      </div>
    ];
  }
}
