import { h, Component, prop } from 'skatejs';
import styles from './Code.scss';
import { css } from '../_helpers/css';

// public
interface CodeProps extends JSX.HTMLProps<HTMLElement | any> {
  isMultiline?: boolean,
}

export class Code extends Component<CodeProps> {
  static get is(){ return 'bl-code' }

  static get props() {
    return {
      isMultiline: prop.boolean({
        attribute: true
      })
    }
  }

  isMultiline: boolean;

  renderCallback() {
    const {isMultiline} = this;

    const className = css(
      'c-code',
      {
        'c-code--multiline': isMultiline
      }
    );

    return [
      <style>{styles}</style>,
      <code className={className}>
        <slot/>
      </code>
    ]
  }
}

customElements.define( Code.is, Code );
