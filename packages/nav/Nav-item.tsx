import styles from './Nav.scss'
import { h, Component, prop } from 'skatejs';
import { css } from '../../utils/css';

const NavItemTypes = {
  success: 'success',
  brand: 'brand',
  info: 'info',
  error: 'error',
};
type NavItemTypesType = typeof NavItemTypes;

interface NavItemProps extends JSX.HTMLProps<HTMLElement | any> {
  type?: keyof NavItemTypesType,
  active?: boolean,
  right?: boolean,
  inline?: boolean,
}
export class NavItem extends Component<NavItemProps> {
  _props: NavItemProps;

  static get is() { return 'bl-nav-item' }
  static get props() {
    return {
      type: prop.string({
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
    }
  }

  type: string;
  active: boolean;
  right: boolean;
  inline: boolean;

  renderCallback() {
    const { type, active, right, inline } = this;
    const className = css(
      {
        'c-nav__item--active': active,
        'c-nav__item--right': right,
        'c-nav__item--success': type === NavItemTypes.success,
        'c-nav__item--brand': type === NavItemTypes.brand,
        'c-nav__item--info': type === NavItemTypes.info,
        'c-nav__item--error': type === NavItemTypes.error,
        'inline-li': inline,
      });

    return [
      <style>{styles}</style>,
      <li className={className}>
        <slot></slot>
      </li>
    ]
  }
}

customElements.define( NavItem.is, NavItem );
