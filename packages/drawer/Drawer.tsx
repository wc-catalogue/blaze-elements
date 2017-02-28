import { h, Component, prop } from 'skatejs';
import styles from './Drawer.scss';
import { css } from '@blaze-elements/common';

const DrawerPositions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

type DrawerPositionsType = typeof DrawerPositions;

export interface DrawerProps {
  position?: keyof DrawerPositionsType,
  visible?: boolean,

  floating?: boolean,
}

export default class Drawer extends Component<DrawerProps> {

  static get is() { return 'bl-drawer'; }
  static get props() {
    return {
      position: prop.string( {
        attribute: {
          source: true
        }
      } ),
      visible: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      floating: prop.boolean( {
        attribute: {
          source: true
        }
      } )
    };
  }

  position = 'top';
  visible: boolean;
  floating = true;

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
      <style>{styles}</style>,
      <div className={className}>
        <slot />
      </div>
    ];
  }

}


