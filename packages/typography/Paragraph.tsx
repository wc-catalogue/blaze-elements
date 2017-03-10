import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Paragraph.scss';

export type ParagraphProps = Props & EventProps;

export type ParagraphAttrs = {};

export type Props = {};

export type EventProps = {};

export type ParagraphEvents = {};

@shadyCssStyles()
export default class Paragraph extends Component<ParagraphProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <p class="c-paragraph">
        <slot />
      </p>
    );
  }
}
