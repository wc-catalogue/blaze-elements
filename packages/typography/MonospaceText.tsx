import { h, Component } from 'skatejs';
import styles from './MonospaceText.scss';
import { css } from '../_helpers/css';

// public
interface MonospaceTextProps extends JSX.HTMLProps<HTMLElement | any> {
}

export class MonospaceText extends Component<MonospaceTextProps> {
  static get is(){ return 'bl-monospace-text' }

  renderCallback() {
    const className = css(
      'c-text--mono'
    );
    return [
      <style>{styles}</style>,
      <span className={className}>
        <slot/>
      </span>
    ]
  }
}

customElements.define( MonospaceText.is, MonospaceText );
