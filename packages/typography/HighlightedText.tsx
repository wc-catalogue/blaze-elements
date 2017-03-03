import { h, Component } from 'skatejs';
import styles from './HighlightedText.scss';
import { css } from '@blaze-elements/common';

// public
interface HighlightedTextProps {
}

export class HighlightedText extends Component<HighlightedTextProps> {
  static get is() { return 'bl-highlighted-text'; }

  renderCallback() {
    const className = css(
      'c-text--highlight'
    );
    return [
      <style>{styles}</style>,
      <span className={className}>
        <slot />
      </span>
    ];
  }
}

customElements.define( HighlightedText.is, HighlightedText );
