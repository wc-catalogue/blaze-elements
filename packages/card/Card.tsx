import { h, Component } from 'skatejs';
import styles from './Card.scss';

export class Card extends Component<void> {
  static get is() { return 'bl-card'; }

  renderCallback() {
    return [
      <style>{styles}</style>,
      <div class="c-card">
        <header class="c-card__header">
          <slot name="dismiss" />
          <h2 class="c-heading">
            <slot name="heading" />
          </h2>
        </header>
        <div class="c-card__body">
          <slot name="body" />
        </div>
        <footer class="c-card__footer">
          <slot name="footer" />
        </footer>
      </div>
    ];
  }
}

customElements.define( Card.is, Card );
