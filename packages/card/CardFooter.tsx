import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Card.scss';

export type CardFooterProps = Props & Events;
export type Props = {};
export type Events = {};

@shadyCssStyles()
export default class CardFooter extends Component<CardFooterProps> {

  get css() { return styles; }

  renderCallback() {
    return [
      <footer class="c-card__footer">
        <slot />
      </footer>
    ];
  }
}
