import { h, Component, prop } from 'skatejs';
import styles from './Tooltip.scss';
import { css } from '../_helpers/css';

const TooltipTypes = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

type TooltipTypesType = typeof TooltipTypes;

// public
interface TooltipProps {
  type?: keyof TooltipTypesType,
  label: string,
}

export class Tooltip extends Component<TooltipProps> {
  static get is() { return 'bl-tooltip'; }
  static get props() {
    return {
      type: prop.string({
        attribute: true
      }),
      label: prop.string({
        attribute: true
      })
    };
  }

  type = 'right';
  label = '';

  renderCallback() {
    const { label, type } = this;
    const className = css(
      'c-badge c-tooltip', {
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
        <slot></slot>
      </span>
    ];
  }

}

customElements.define( Tooltip.is, Tooltip );
