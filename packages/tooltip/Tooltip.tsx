import { h, Component } from 'skatejs';
import styles from './Tooltip.scss';
import { css, prop, shadyCssStyles } from '@blaze-elements/common';

export const TooltipTypes = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

export type TooltipProps = Props & EventProps;

export type Attrs = {
  type?: keyof typeof TooltipTypes,
  label?: string,
};

export type Props = {
  type?: keyof typeof TooltipTypes,
  label?: string,
};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class Tooltip extends Component<TooltipProps> {

  @prop( {
    type: String,
    attribute: {
      source: true
    },
    default: 'right'
  } ) type: keyof typeof TooltipTypes;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) label: string;

  get css() { return styles; }

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

    return (
      <span
        className={className}
        aria-label={label}
      >
        <slot />
      </span>
    );
  }

}
