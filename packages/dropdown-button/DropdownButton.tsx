import { h, Component, prop, ComponentProps } from 'skatejs';

import {
  ColorType,
  cssClassForColorType,
  css,
  GenericTypes,
  GenericEvents
} from '../_helpers';

import styles from './Button.scss';

export type DropdownButtonProps = Props & EventHandlers;

export type Props = {
  disabled?: boolean,
  ghost?: boolean,
  color?: ColorType,
};

export type Events = {
  click?: GenericEvents.ClickHandler,
};
export type EventHandlers = {
  onClick?: GenericEvents.ClickHandler,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-dropdown-button': GenericTypes.IntrinsicCustomElement<DropdownButtonProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class DropdownButton extends Component<DropdownButtonProps> {


  renderCallback() {
    return [
      <button>
        <slot />
      </button>
    ];
  }
}
