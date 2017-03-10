import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './MonospaceText.scss';

export type MonospaceTextProps = Props & EventProps;

export type MonospaceTextAttrs = {};

export type Props = {};

export type EventProps = {};

export type MonospaceTextEvents = {};

@shadyCssStyles()
export default class MonospaceText extends Component<MonospaceTextProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <span class="c-text--mono">
        <slot />
      </span>
    );
  }
}
