import { h, Component, prop, ComponentProps } from 'skatejs';

import {
  ColorType,
  cssClassForColorType,
  css,
  GenericTypes,
  GenericEvents
} from '../_helpers';

import styles from './Button.scss';

export type ButtonProps = Props & EventHandlers;

export type Props = {
  disabled?: boolean,
  block?: boolean,
  close?: boolean,
  ghost?: boolean,
  color?: ColorType,
};

export type Events = {
  click?: GenericEvents.ClickEvent,
};
export type EventHandlers = {
  onClick?: GenericEvents.ClickEvent,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-button': GenericTypes.IntrinsicCustomElement<ButtonProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class Button extends Component<ButtonProps> {
  static get is() { return 'bl-button'; }
  static get props(): ComponentProps<Button, Props> {
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
      color: prop.string<Button, ColorType>( {
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
