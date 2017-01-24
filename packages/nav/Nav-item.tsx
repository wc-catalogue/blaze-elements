import styles from './Nav.scss';
import { h, Component, prop } from 'skatejs';
import {ColorType, cssClassForColorType} from '../_helpers/colorTypes';
import { css } from '../_helpers/css';

interface NavItemProps {
  color?: ColorType,
  active?: boolean,
  right?: boolean,
  inline?: boolean,
}
export class NavItem extends Component<NavItemProps> {

  static get is() { return 'bl-nav-item'; }
  static get props() {
    return {
      color: prop.string({
        attribute: true
      }),
      active: prop.boolean({
        attribute: true
      }),
      right: prop.boolean({
        attribute: true
      }),
      inline: prop.boolean({
        attribute: true
      }),
    };
  }

  color: ColorType;
  active: boolean;
  right: boolean;
  inline: boolean;

  renderCallback() {
    const { color, active, right, inline } = this;
    const colorClass = cssClassForColorType('c-nav__item', color);
    const className = css(
      'c-nav__item',
      colorClass,
      {
        'c-nav__item--active': active,
        'c-nav__item--right': right,
        'inline-li': inline
      }
    );

    return [
      <style>{styles}</style>,
      <li className={className}>
        <slot></slot>
      </li>
    ];
  }
}

customElements.define( NavItem.is, NavItem );
