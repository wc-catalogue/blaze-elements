import styles from './Badge.scss'
import { h, Component, prop } from 'skatejs';
import {ColorType, cssClassForColorType} from '../_helpers/colorTypes'
import { css } from '../_helpers/css';

interface BadgeProps {
  color?: ColorType,
  rounded?: boolean,
  ghost?: boolean,
}

export class Badge extends Component<BadgeProps> {
  static get is() { return 'bl-badge' }
  static get props() {
    return {
      color: prop.string({
        attribute: true
      }),
      rounded: prop.boolean({
        attribute: true
      }),
      ghost: prop.boolean({
        attribute: true
      }),
    }
  }

  color: ColorType;
  rounded: boolean;
  ghost: boolean;

  renderCallback() {

    const { color, rounded, ghost } = this;

    const colorClass = cssClassForColorType('c-badge', color);
    const className = css(
      'c-badge',
      colorClass,
      {
        'c-badge--rounded': rounded,
        'c-badge--ghost': ghost,
      }

    );

    return [
      <style>{styles}</style>,
      <span className={className}><slot></slot></span>
    ]
  }
}

customElements.define( Badge.is, Badge );
