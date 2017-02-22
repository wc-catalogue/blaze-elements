import { h, Component } from 'skatejs';
import styles from './QuietText.scss';
import { css } from '@blaze-elements/common';

// public
interface QuietTextProps {
}

export class QuietText extends Component<QuietTextProps> {
  static get is() { return 'bl-quiet-text'; }

  renderCallback() {
    const className = css(
      'c-text--quiet'
    );
    return [
      <style>{styles}</style>,
      <span className={className}>
        <slot />
      </span>
    ];
  }
}

customElements.define( QuietText.is, QuietText );
