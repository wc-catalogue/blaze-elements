import { h, Component, prop } from 'skatejs';
import styles from './Overlay.scss';
import { css } from '../../utils/css';

// public
interface OverlayProps extends JSX.HTMLProps<HTMLElement | any> {
  isDismissable?: boolean,
  isTransparent?: boolean,
  isFullpage?: boolean,
}

export class Overlay extends Component<OverlayProps> {
  _props: OverlayProps;
  static get is() { return 'bl-overlay' }
  static get props() {
    return {
      isDismissable: prop.boolean(),
      isTransparent: prop.boolean(),
      isFullpage: prop.boolean()
    }
  }

  isDismissable = false;
  isTransparent = false;
  isFullpage = false;

  renderCallback() {
    const { isDismissable, isTransparent, isFullpage } = this;
    const className = css(
      'c-overlay',{
        'c-overlay--dismissable': isDismissable,
        'c-overlay--transparent': isTransparent,
        'c-overlay--fullpage': isFullpage,
      }
    );

    return [
      <style>{styles}</style>,
      <div className={className}></div>
    ]
  }

}

customElements.define( Overlay.is, Overlay );
