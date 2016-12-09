import styles from './Badge.scss'
import { h, Component, prop } from 'skatejs';
import { css } from '../../utils/css';

const BadgeColors = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error',
};

type BadgeColorsType = typeof BadgeColors;

interface BadgeProps extends JSX.HTMLProps<HTMLElement | any> {
  color?: keyof BadgeColorsType,
  rounded?: boolean,
  ghost?: boolean,
}

export class Badge extends Component<BadgeProps> {
  _props: BadgeProps;
  static get is() { return 'bl-badge' }
  static get props() {
    return {
      color: prop.string(),
      rounded: prop.boolean(),
      ghost: prop.boolean(),
    }
  }

  color: string;
  rounded: boolean;
  ghost: boolean;

  renderCallback() {

    const { color, rounded, ghost } = this;

    const className = css(
      'c-badge',
      {
        'c-badge--rounded': rounded,
        'c-badge--ghost': ghost,
        'c-badge--brand': color === BadgeColors.brand,
        'c-badge--info': color === BadgeColors.info,
        'c-badge--warning': color === BadgeColors.warning,
        'c-badge--success': color === BadgeColors.success,
        'c-badge--error': color === BadgeColors.error,
      }

    );

    return [
      <style>{styles}</style>,
      <span className={className}><slot></slot></span>
    ]
  }
}

customElements.define( Badge.is, Badge );
