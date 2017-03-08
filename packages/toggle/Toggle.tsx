import styles from './Toggle.scss';
import { h, Component, props, emit } from 'skatejs';
import {
  ColorType,
  cssClassForColorType,
  css,
  GenericEvents,
  prop,
  shadyCssStyles
} from '@blaze-elements/common';

export type ToggleProps = Props & EventProps;

export type Attrs = {
  disabled?: boolean,
  checked?: boolean,
  color?: ColorType,
};

export type EventProps = {
  onChange?: GenericEvents.CustomChangeHandler<string>,
};

export type Events = {
  change?: GenericEvents.CustomChangeHandler<string>,
};

export type Props = {
  disabled?: boolean,
  checked?: boolean,
  color?: ColorType,
};

@shadyCssStyles()
export default class Toggle extends Component<ToggleProps> {

  static get events() {
    return {
      CHANGE: 'change'
    };
  }

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) disabled = false;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) checked = false;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) color: ColorType;

  get css() { return styles; }

  connectedCallback() {
    super.connectedCallback();
    this.handleChecked = this.handleChecked.bind( this );
  }

  renderCallback() {
    const { disabled, checked, color } = this;
    const colorClass = cssClassForColorType( 'c-toggle', color );
    const className = css( 'c-toggle', colorClass );

    return (
      <label class={className}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={this.handleChecked}
        />
        <div class="c-toggle__track">
          <div class="c-toggle__handle" />
        </div>
        <slot />
      </label>
    );
  }
  private handleChecked( event: Event ) {
    event.stopPropagation();
    props( this, { checked: !this.checked } );
    emit( this, Toggle.events.CHANGE, {
      detail: {
        value: this.checked
      }
    } );
  }
}
