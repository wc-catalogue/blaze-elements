import { h, Component, prop } from 'skatejs';

import {
  ColorType,
  GenericTypes,
  GenericEvents
} from '../_helpers';
import styles from './DropdownButton.scss';
import { DropdownButtonOverlay, DropdownButtonCard, DropdownButtonNav, DropdownButtonButton } from './components/index';

export type DropdownButtonProps = Props & EventHandlers;

export type Props = {
  disabled?: boolean,
  ghost?: boolean,
  color?: ColorType,
  title?: string,
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
      'bl-dropdown-button': GenericTypes.IntrinsicCustomElement<DropdownButtonProps>
          & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class DropdownButton extends Component<DropdownButtonProps> {

  static get is() { return 'bl-dropdown-button'; }

  static get props() {
    return {
      open: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      title: prop.string( {
        attribute: {
          source: true
        }
      } ),
    };
  }

  title: string;
  open = false;

  constructor() {
    super();
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    this.open = !this.open;
  }

  renderCallback() {
    const { title, open } = this;
    return [
      <style>{styles}</style>,
      <DropdownButtonButton
        onClick={this.handleClick}
        color="brand"
      >
        {title} <span className="caret" />
      </DropdownButtonButton>,
      open && <DropdownButtonOverlay isTransparent isFullpage onClick={this.handleClick} />,
      open && <DropdownButtonCard><DropdownButtonNav slot="body">
        <slot />
      </DropdownButtonNav></DropdownButtonCard>
    ];
  }

}
