import { h, Component, prop } from 'skatejs';
import styles from './Drawer.scss';
import { css } from '../_helpers/css';

const DrawerPositions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

type DrawerPositionsType = typeof DrawerPositions;

interface DrawerProps extends JSX.HTMLProps<HTMLElement | any> {
  position?: keyof DrawerPositionsType,
  visible?: boolean,
}

export class Drawer extends Component<DrawerProps>{
  static get is() { return 'bl-drawer' }
  static get props() {
    return {
      position: prop.string({
        attribute: true
      }),
      visible: prop.boolean({
        attribute: true
      })
    }
  }

  position = 'top';
  visible: boolean;

  renderCallback() {

    const { position, visible } = this;

    const className = css(
      'o-drawer u-highest', {
        'o-drawer--top': position === DrawerPositions.top,
        'o-drawer--bottom': position === DrawerPositions.bottom,
        'o-drawer--left': position === DrawerPositions.left,
        'o-drawer--right': position === DrawerPositions.right,
        'o-drawer--visible': visible,
      });

    return [
      <style>{styles}</style>,
      <div className={className}>
        <slot />
      </div>
    ]
  }

}

customElements.define( Drawer.is, Drawer );
