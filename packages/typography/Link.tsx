import { h, Component } from 'skatejs';
import { ColorType, cssClassForColorType, css, prop, shadyCssStyles } from '@blaze-elements/common';
import styles from './Link.scss';

export const LinkTargets = {
  _self: '_self',
  _blank: '_blank',
  _parent: '_parent',
  _top: '_top',
};

export type LinkProps = Props & EventProps;

export type LinkAttrs = {
  href?: string,
  download?: string,
  hreflang?: string,
  rel?: string,
  target?: keyof typeof LinkTargets | string,
  type?: string,
  color?: ColorType,
};

export type Props = {
  href?: string,
  download?: string,
  hreflang?: string,
  rel?: string,
  target?: keyof typeof LinkTargets | string,
  type?: string,
  color?: ColorType,
};

export type EventProps = {};

export type LinkEvents = {};

@shadyCssStyles()
export default class Link extends Component<LinkProps> {

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) href: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) download: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) hreflang: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) rel: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) target: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) type: string;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) color: ColorType;

  get css() { return styles; }

  renderCallback() {

    const { href, download, hreflang, rel, target, type, color } = this;
    const colorClass = cssClassForColorType( 'c-link', color );
    const className = css( 'c-link', colorClass );

    return (
      <a
        className={className}
        href={href}
        download={download}
        hreflang={hreflang}
        rel={rel}
        target={target}
        type={type}
      >
        <slot />
      </a>
    );

  }

}
