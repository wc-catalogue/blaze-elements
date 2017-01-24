import { h, Component } from 'skatejs';
import styles from './Card.scss';

export class Card extends Component<void> {
  static get is() { return 'bl-card'; }

  renderCallback() {
    return [
      <style>{styles}</style>,
      <div class="c-card">
        <header class="c-card__header">
          <slot name="dismiss"></slot>
          <h2 class="c-heading">
            <slot name="heading"></slot>
          </h2>
        </header>
        <div class="c-card__body">
          <slot name="body"></slot>
        </div>
        <footer class="c-card__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    ];
  }
}

customElements.define( Card.is, Card );
