import { h, Component, prop, ComponentProps } from 'skatejs';

import {
  cssClassForColorType,
  css,
  GenericTypes,
  GenericEvents,
  Colored,
  ColoredProps,
  Disabled,
  DisabledProps
} from '../_helpers';

import styles from './Button.scss';

export type ButtonProps = Props & EventHandlers;

export type Props = {
  block?: boolean,
  close?: boolean,
  ghost?: boolean,
}
& ColoredProps
& DisabledProps;

export type Events = {
  click?: GenericEvents.ClickHandler,
};
export type EventHandlers = {
  onClick?: GenericEvents.ClickHandler,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-button': GenericTypes.IntrinsicCustomElement<ButtonProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class Button extends Colored(Disabled(Component))<ButtonProps> {
  static get is() { return 'bl-button'; }
  static get props(): ComponentProps<Button, Props> {
    return {
      block: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      close: prop.boolean( {
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

  block?: boolean;
  close?: boolean;
  ghost?: boolean;

  renderCallback() {
    const { color, ghost, close, block, disabled } = this;
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
        class={className}
        disabled={disabled}
      >
        <slot />
      </button>
    ];
  }
}

console.dir(Button)
