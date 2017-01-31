import { h, Component, prop } from 'skatejs';

import { ColorType, cssClassForColorType, css } from '../_helpers';

import styles from './Button.scss';

// public
type ButtonProps = Props & EventProps;
type Props = {
  disabled?: boolean,
  block?: boolean,
  close?: boolean,
  ghost?: boolean,
  color?: ColorType,
};
type EventProps = {
  onClick?: typeof HTMLElement.prototype.onclick,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-button': ButtonProps & Partial<HTMLElement>,
    }
  }
}

export class Button extends Component<ButtonProps> {
  static get is() { return 'bl-button'; }
  static get props() {
    return {
      disabled: prop.boolean( {
        attribute: true
      }),
      block: prop.boolean( {
        attribute: {
          source: true
        }
      }),
      close: prop.boolean( {
        attribute: {
          source: true
        }
      }),
      ghost: prop.boolean( {
        attribute: {
          source: true
        }
      }),
      color: prop.string( {
        attribute: {
          source: true
        }
      })
    };
  }

  disabled: boolean;
  block: boolean;
  close: boolean;
  ghost: boolean;
  color: ColorType;

  renderCallback() {
    const {color, ghost, close, block} = this;
    const colorClass = cssClassForColorType( ghost ? 'c-button--ghost' : 'c-button', color, ghost );
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
        <slot />
      </button>
    ];
  }
}
