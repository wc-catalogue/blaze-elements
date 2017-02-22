import { h, Component, prop } from 'skatejs';
import styles from './Abbreviation.scss';
import { css } from '@blaze-elements/common';

// public
interface AbbreviationProps {
  title: string,
}

export class Abbreviation extends Component<AbbreviationProps> {
  static get is() { return 'bl-abbreviation'; }

  static get props() {
    return {
      title: prop.string( {
        attribute: true
      } )
    };
  }

  title: string;

  renderCallback() {
    const { title } = this;

    const className = css(
      'c-text--help'
    );

    return [
      <style>{styles}</style>,
      <abbr className={className} title={title}>
        <slot />
      </abbr>
    ];
  }
}

customElements.define( Abbreviation.is, Abbreviation );
