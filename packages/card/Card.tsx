import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Card.scss';

export type CardProps = Props & Events;
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
