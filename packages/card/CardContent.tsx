import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { shadyCssStyles } from '@blaze-elements/common';

export type CardContentProps = Props & Events;
export type Props = {};
export type Events = {};

@shadyCssStyles()
export default class CardContent extends Component<CardContentProps> {

  get css() { return styles; }

  renderCallback() {
    return [
      <div class="c-card__body">
        <slot />
      </div>
    ];
  }
}
