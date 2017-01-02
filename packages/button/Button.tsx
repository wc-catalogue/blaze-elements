import { h, Component, prop } from 'skatejs';
import {ColorType, cssClassForColorType} from '../_helpers/colorTypes'
import styles from './Button.scss';
import { css } from '../_helpers/css';

// public
interface ButtonProps extends JSX.HTMLProps<HTMLButtonElement | HTMLAnchorElement | any> {
  disabled?: boolean,
  close?: boolean,
  ghost?: boolean,
  color?: keyof ColorType,
}

export class Button extends Component<ButtonProps> {
  static get is(){ return 'bl-button' }
  static get props() {
    return {
      disabled: prop.boolean( {
        attribute: true
      }),
      close: prop.boolean({
        attribute: true
      }),
      ghost: prop.boolean({
        attribute: true
      }),
      color: prop.string({
        attribute: true
      })
    }
  }

  disabled: boolean;
  close: boolean;
  ghost: boolean;
  color: ColorType;

  renderCallback() {
    const {color, ghost, close} = this;
    const colorClass = cssClassForColorType(ghost ? 'c-button--ghost' : 'c-button', color, ghost);
    const className = css(
      'c-button',
      colorClass,
      {
        'c-button--ghost': ghost && !color,
        'c-button--close': close,
      }
    );
    return [
      <style>{styles}</style>,
      <button
        className={className}
        disabled={this.disabled}
      >
        <slot/>
      </button>
    ]
  }
}

customElements.define( Button.is, Button );
