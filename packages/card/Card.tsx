import { h, Component } from 'skatejs';
import styles from './Card.scss';
import { shadyCssStyles } from '../_helpers';

export default class Card extends Component<void> {
export type CardProps = Props;
export type Props = {};
export type Events = {};

@shadyCssStyles()
export default class Card extends Component<CardProps> {

  get css() { return styles; }

  renderCallback() {

    const hasHeader = this.querySelectorAll( '[slot="heading"]' ).length > 0;
    const hasFooter = this.querySelectorAll( '[slot="footer"]' ).length > 0;

    return [
      <style>{styles}</style>,
      <div class="c-card">

        {hasHeader &&
          <header class="c-card__header">
            <slot name="dismiss" />
            <h2 class="c-heading">
              <slot name="heading" />
            </h2>
          </header>
        }

        <div class="c-card__body">
          <slot name="body" />
        </div>

        {hasFooter &&
          <footer class="c-card__footer">
            <slot name="footer" />
          </footer>
        }

      </div>
    ];
  }
}
