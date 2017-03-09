import { h, Component } from 'skatejs';
import styles from './Code.scss';
import { css, prop, shadyCssStyles } from '@blaze-elements/common';

export type CodeProps = Props & EventProps;

export type CodeAttrs = {
  isMultiline?: boolean,
};

export type Props = {
  isMultiline?: boolean,
};

export type EventProps = {};

export type CodeEvents = {};

@shadyCssStyles()
export default class Code extends Component<CodeProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) isMultiline: boolean;

  get css() { return styles; }

  renderCallback() {
    const { isMultiline } = this;

    const className = css(
      'c-code',
      {
        'c-code--multiline': isMultiline
      }
    );

    return (
      <code className={className}>
        <slot />
      </code>
    );
  }
}
