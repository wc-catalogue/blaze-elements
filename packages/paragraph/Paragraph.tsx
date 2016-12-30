import { h, Component } from 'skatejs';
import styles from './Paragraph.scss';
import { css } from '../../utils/css';

// public
interface ParagraphProps extends JSX.HTMLProps<HTMLElement | any> {
}

export class Paragraph extends Component<ParagraphProps> {
  static get is(){ return 'bl-paragraph' }

  renderCallback() {
    const className = css(
      'c-paragraph'
    );
    return [
      <style>{styles}</style>,
      <p className={className}>
        <slot/>
      </p>
    ]
  }
}

customElements.define( Paragraph.is, Paragraph );
