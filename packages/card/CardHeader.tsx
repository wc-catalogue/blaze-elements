import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { shadyCssStyles } from '../_helpers';

export type CardHeaderProps = Props & Events;
export type Props = {};
export type Events = {};

@shadyCssStyles()
export default class CardHeader extends Component<CardHeaderProps> {

  get css() { return styles; }

  renderCallback() {
    return [
      <header class="c-card__header">
        <slot name="dismiss" />
        <h2 class="c-heading">
          <slot/>
        </h2>
      </header>
    ];
  }
}
