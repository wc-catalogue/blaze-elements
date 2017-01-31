import { h, Component, prop } from 'skatejs';
import styles from './Tooltip.scss';
import { css } from '../_helpers/css';

const TooltipTypes = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

// public
type TooltipProps = {
  type?: keyof typeof TooltipTypes,
  label: string,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-tooltip': TooltipProps & Partial<HTMLElement>,
    }
  }
};

export class Tooltip extends Component<TooltipProps> {
  static get is() { return 'bl-tooltip'; }
  static get props() {
    return {
      type: prop.string( {
        attribute: {
          source: true
        },
        default: 'right'
      }),
      label: prop.string( {
        attribute: {
          source: true
        }
      })
    };
  }

  type: string;
  label: string;

  renderCallback() {
    const { label, type } = this;
    const className = css(
      'c-tooltip', {
        'c-tooltip--right': type === TooltipTypes.right,
        'c-tooltip--left': type === TooltipTypes.left,
        'c-tooltip--top': type === TooltipTypes.top,
        'c-tooltip--bottom': type === TooltipTypes.bottom,
      }
    );

    return [
      <style>{styles}</style>,
      <span
        className={className}
        aria-label={label}
      >
        <slot />
      </span>
    ];
  }

}
