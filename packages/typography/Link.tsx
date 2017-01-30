import { h, Component, prop } from 'skatejs';
import { ColorType, cssClassForColorType } from '../_helpers/colorTypes';
import style from './Link.scss';
import { css } from '../_helpers/css';

const LinkTargets = {
  _self: '_self',
  _blank: '_blank',
  _parent: '_parent',
  _top: '_top',
};

interface LinkProps {
  href?: string,
  download?: string,
  hreflang?: string,
  rel?: string,
  target?: keyof typeof LinkTargets | string,
  type?: string,
  color?: ColorType,
}

export class Link extends Component<LinkProps> {

  static get is() { return 'bl-link'; }

  static get props() {
    return {
      href: prop.string( {
        attribute: true
      }),
      download: prop.string( {
        attribute: true
      }),
      hreflang: prop.string( {
        attribute: true
      }),
      referrerpolicy: prop.string( {
        attribute: true
      }),
      rel: prop.string( {
        attribute: true
      }),
      target: prop.string( {
        attribute: true
      }),
      type: prop.string( {
        attribute: true
      }),
      color: prop.string( {
        attribute: true
      })
    };
  }

  href: string;
  download: string;
  hreflang: string;
  rel: string;
  target: string;
  type: string;
  color: ColorType;

  renderCallback() {

    const { href, download, hreflang, rel, target, type, color } = this;
    const colorClass = cssClassForColorType( 'c-link', color );
    const className = css( 'c-link', colorClass );

    return [
      <style>{style}</style>,
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
    ];

  }

}
customElements.define( Link.is, Link );
