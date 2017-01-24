import { h, Component, prop } from 'skatejs';
import styles from './Overlay.scss';
import { css } from '../_helpers/css';

// public
type OverlayProps = Props & EventProps;
type Props = {
  isDismissable?: boolean,
  isTransparent?: boolean,
  isFullpage?: boolean,
  tabIndex?: number | string,
};
type EventProps = {
  onClick?: typeof HTMLElement.prototype.onclick,
  onFocus?: typeof HTMLElement.prototype.onfocus,
};

export class Overlay extends Component<OverlayProps> {
  static get is() { return 'bl-overlay'; }
  static get props() {
    return {
      isDismissable: prop.boolean(),
      isTransparent: prop.boolean(),
      isFullpage: prop.boolean()
    };
  }

  isDismissable = false;
  isTransparent = false;
  isFullpage = false;

  renderCallback() {
    const { isDismissable, isTransparent, isFullpage } = this;
    const className = css(
      'c-overlay', {
        'c-overlay--dismissable': isDismissable,
        'c-overlay--transparent': isTransparent,
        'c-overlay--fullpage': isFullpage,
      }
    );

    return [
      <style>{styles}</style>,
      <div className={className}></div>
    ];
  }

}

customElements.define( Overlay.is, Overlay );
