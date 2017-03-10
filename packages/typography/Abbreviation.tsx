import { prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Abbreviation.scss';

export type AbbreviationProps = Props & EventProps;

export type AbbreviationAttrs = {
  title?: string
};

export type Props = {
  title?: string
};

export type EventProps = {};

export type AbbreviationEvents = {};

@shadyCssStyles()
export default class Abbreviation extends Component<AbbreviationProps> {

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } )
  title: string;

  get css() { return styles; }

  renderCallback() {
    const { title } = this;

    return (
      <abbr class="c-text--help" title={title}>
        <slot />
      </abbr>
    );
  }
}
