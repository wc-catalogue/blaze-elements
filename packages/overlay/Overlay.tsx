import { css, prop } from '@blaze-elements/common';
import { Component, h } from 'skatejs';

import styles from './Overlay.scss';

// public
export type OverlayProps = Props & EventProps;
export type Props = {
  isDismissable?: boolean,
  isTransparent?: boolean,
  isFullpage?: boolean,
  tabIndex?: number | string,
};
export type EventProps = {
  onClick?: typeof HTMLElement.prototype.onclick,
  onFocus?: typeof HTMLElement.prototype.onfocus,
};

export default class Overlay extends Component<OverlayProps> {

  @prop( {
    type: Boolean
  } ) isDismissable = false;

  @prop( {
    type: Boolean
  } ) isTransparent = false;

  @prop( {
    type: Boolean
  } ) isFullpage = false;

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
      <div className={className} />
    ];
  }

}
