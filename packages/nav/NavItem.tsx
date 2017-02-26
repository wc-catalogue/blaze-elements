import styles from './Nav.scss';
import { h, Component } from 'skatejs';
import {
  ColorType,
  cssClassForColorType,
  css,
  prop
} from '@blaze-elements/common';

export type NavItemProps = Props;

export type Props = {
  color?: ColorType,
  active?: boolean,
  right?: boolean,
  inline?: boolean,
}

export default class NavItem extends Component<NavItemProps> {

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) color: ColorType;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) active: boolean;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) right: boolean;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) inline: boolean;

  renderCallback() {
    const { color, active, right, inline } = this;
    const colorClass = cssClassForColorType( 'c-nav__item', color );
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
        <slot />
      </li>
    ];
  }
}

