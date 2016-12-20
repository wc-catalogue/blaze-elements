import { h, Component, prop } from 'skatejs';
import style from './Link.scss';
import { css } from '../../utils/css';

const LinkTargets = {
  _self: '_self',
  _blank: '_blank',
  _parent: '_parent',
  _top: '_top',
};

const LinkColors = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error',
};

interface LinkProps extends JSX.HTMLProps<Link | any> {
  href?: string,
  download?: string,
  hreflang?: string,
  rel?: string,
  target?: keyof typeof LinkTargets,
  type?: string,
  color?: keyof typeof LinkColors,
}

export class Link extends Component<LinkProps> {
  _props: LinkProps;

  static get is() { return 'bl-link' }

  static get props() {
    return {
      href: prop.string( {
        attribute: true
      } ),
      download: prop.string( {
        attribute: true
      } ),
      hreflang: prop.string( {
        attribute: true
      } ),
      referrerpolicy: prop.string( {
        attribute: true
      } ),
      rel: prop.string( {
        attribute: true
      } ),
      target: prop.string( {
        attribute: true
      } ),
      type: prop.string( {
        attribute: true
      } ),
      color: prop.string( {
        attribute: true
      } )
    }
  }

  href: string;
  download: string;
  hreflang: string;
  rel: string;
  target: string;
  type: string;
  color: string;

  renderCallback() {

    const { href, download, hreflang, rel, target, type, color } = this;
    const className = css(
      'c-link',
      {
        'c-link--brand': color === LinkColors.brand,
        'c-link--success': color === LinkColors.success,
        'c-link--error': color === LinkColors.error,
        'c-link--warning': color === LinkColors.warning,
        'c-link--info': color === LinkColors.info,
      } );

    return [
      <style>{style}</style>,
      <a
        className={className}
        href={href}
        download={download}
        hrefLang={hreflang}
        rel={rel}
        target={target}
        type={type}
      >
        <slot />
      </a>
    ]

  }

}
customElements.define( Link.is, Link );
