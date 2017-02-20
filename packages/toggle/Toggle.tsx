import styles from './Toggle.scss';
import { h, Component, prop, props, emit } from 'skatejs';
import { ColorType, cssClassForColorType } from '../_helpers/colorTypes';
import { css, GenericTypes, GenericEvents } from '../_helpers/index';

type ToggleProps = Props & EventProps;
type EventProps = {
  onChange?: GenericEvents.CustomChangeHandler<string>,
};
type Events = {
  change?: GenericEvents.CustomChangeHandler<string>,
};
type Props = {
  disabled?: boolean,
  checked?: boolean,
  color?: ColorType,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-toggle': GenericTypes.IntrinsicCustomElement<ToggleProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class Toggle extends Component<ToggleProps> {
  static get is() { return 'bl-toggle'; }
  static get props() {
    return {
      disabled: prop.boolean( {
        attribute: true
      } ),
      checked: prop.boolean( {
        attribute: true
      } ),
      color: prop.string( {
        attribute: true
      } )
    };
  }
  static get events() {
    return {
      CHANGE: 'change'
    };
  }
  disabled = false;
  checked = false;
  color: ColorType;

  connectedCallback() {
    super.connectedCallback();
    this.handleChecked = this.handleChecked.bind( this );
  }
  renderCallback() {
    const { disabled, checked, color } = this;
    const colorClass = cssClassForColorType( 'c-toggle', color );
    const className = css( 'c-toggle', colorClass );

    return [
      <style>{styles}</style>,
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
    ];
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
