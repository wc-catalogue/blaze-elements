import { h, Component, prop } from 'skatejs';
import { ColorType, cssClassForColorType } from '../_helpers/colorTypes'
import styles from './Button.scss';
import { css } from '../_helpers/css';

// public
interface ButtonProps {
  disabled?: boolean,
  block?: boolean,
  close?: boolean,
  ghost?: boolean,
  color?: ColorType,
  onClick?: typeof HTMLElement.prototype.onclick,
}

export class Button extends Component<ButtonProps> {
  static get is(){ return 'bl-button' }
  static get props() {
    return {
      disabled: prop.boolean( {
        attribute: true
      }),
      block: prop.boolean({
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
  block: boolean;
  close: boolean;
  ghost: boolean;
  color: ColorType;

  renderCallback() {
    const {color, ghost, close, block} = this;
    const colorClass = cssClassForColorType(ghost ? 'c-button--ghost' : 'c-button', color, ghost);
    const className = css(
      'c-button',
      colorClass,
      {
        'c-button--ghost': ghost && !color,
        'c-button--close': close,
        'c-button--block': block,
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
