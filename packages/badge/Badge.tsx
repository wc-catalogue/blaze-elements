import styles from './Badge.scss';
import { h, Component, prop } from 'skatejs';
import { ColorType, cssClassForColorType, css } from '../_helpers';

type BadgeProps = Props;
type Props = {
  color?: ColorType,
  rounded?: boolean,
  ghost?: boolean,
};

// extend JSX.IntrinsicElements namespace with our definition
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-badge': BadgeProps & Partial<HTMLElement>
    }
  }
}

export class Badge extends Component<BadgeProps> {
  static get is() { return 'bl-badge'; }
  static get props() {
    return {
      color: prop.string( {
        attribute: {
          source: true
        }
      } ),
      rounded: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      ghost: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
    };
  }

  color: ColorType;
  rounded: boolean;
  ghost: boolean;

  renderCallback() {

    const { color, rounded, ghost } = this;

    const colorClass = cssClassForColorType( 'c-badge', color );
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
      <span className={className}><slot /></span>
    ];
  }
}
