import { h, Component } from 'skatejs';
import styles from './HighlightedText.scss';
import { shadyCssStyles } from '@blaze-elements/common';

export type HighlightedTextProps = Props & EventProps;

export type HighlightedTextAttrs = {};

export type Props = {};

export type EventProps = {};

export type HighlightedTextEvents = {};

@shadyCssStyles()
export default class HighlightedText extends Component<HighlightedTextProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <span class="c-text--highlight">
        <slot />
      </span>
    );
  }
}
