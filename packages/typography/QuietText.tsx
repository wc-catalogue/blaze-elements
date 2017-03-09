import { h, Component } from 'skatejs';
import styles from './QuietText.scss';
import { shadyCssStyles } from '@blaze-elements/common';

export type QuietTextProps = Props & EventProps;

export type QuietTextAttrs = {};

export type Props = {};

export type EventProps = {};

export type QuietTextEvents = {};

@shadyCssStyles()
export default class QuietText extends Component<QuietTextProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <span class="c-text--quiet">
        <slot />
      </span>
    );
  }
}
