import { h, Component } from 'skatejs';
import styles from './LoudText.scss';
import { css } from '../_helpers/css';

// public
interface LoudTextProps {
}

export class LoudText extends Component<LoudTextProps> {
  static get is() { return 'bl-loud-text'; }

  renderCallback() {
    const className = css(
      'c-text--loud'
    );
    return [
      <style>{styles}</style>,
      <span className={className}>
        <slot />
      </span>
    ];
  }
}

customElements.define( LoudText.is, LoudText );
