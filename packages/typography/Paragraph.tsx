import { h, Component } from 'skatejs';
import styles from './Paragraph.scss';
import { css } from '../_helpers/css';

// public
interface ParagraphProps {
}

export class Paragraph extends Component<ParagraphProps> {
  static get is() { return 'bl-paragraph'; }

  renderCallback() {
    const className = css(
      'c-paragraph'
    );
    return [
      <style>{styles}</style>,
      <p className={className}>
        <slot />
      </p>
    ];
  }
}

customElements.define( Paragraph.is, Paragraph );
