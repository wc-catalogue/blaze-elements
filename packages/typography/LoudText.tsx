import { h, Component } from 'skatejs';
import styles from './LoudText.scss';
import { shadyCssStyles } from '@blaze-elements/common';

export type LoudTextProps = Props & EventProps;

export type LoudTextAttrs = {};

export type Props = {};

export type EventProps = {};

export type LoudTextEvents = {};

@shadyCssStyles()
export default class LoudText extends Component<LoudTextProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <span class="c-text--loud">
        <slot />
      </span>
    );
  }
}
