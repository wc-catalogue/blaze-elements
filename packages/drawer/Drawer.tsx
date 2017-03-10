import { css, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Drawer.scss';

export const DrawerPositions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

export type DrawerProps = Props & Events;
export type Props = {
  position?: keyof typeof DrawerPositions,
  visible?: boolean,
  floating?: boolean,
};
export type Events = {};

@shadyCssStyles()
export default class Drawer extends Component<DrawerProps> {

  @prop( { type: String, attribute: { source: true } } ) position = 'top';
  @prop( { type: Boolean, attribute: { source: true } } ) visible: boolean;
  @prop( { type: Boolean, attribute: { source: true } } ) floating = true;

  get css() { return styles; }

  renderCallback() {

    const { position, visible, floating } = this;

    const className = css(
      'o-drawer', {
        'o-drawer--top': position === DrawerPositions.top,
        'o-drawer--bottom': position === DrawerPositions.bottom,
        'o-drawer--left': position === DrawerPositions.left,
        'o-drawer--right': position === DrawerPositions.right,
        'o-drawer--visible': visible,
        'o-drawer--static': !floating,
        'u-highest': floating,
      } );

    return [
      <div className={className}>
        <slot />
      </div>
    ];
  }

}
