import { h } from 'skatejs';

import {
  ColoredProps,
  css,
  cssClassForColorType,
  DisabledProps,
  GenericEvents,
  prop,
  shadyCssStyles
} from '@blaze-elements/common';

import { ColoredDisabledComponent } from '../common/components';
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

@shadyCssStyles()
export default class Button extends ColoredDisabledComponent<ButtonProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) block?: boolean;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) close?: boolean;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) ghost?: boolean;

  get css() {
    return styles;
  }

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

    return (
      <button
        class={className}
        disabled={disabled}
      >
        <slot />
      </button>
    );
  }
}
