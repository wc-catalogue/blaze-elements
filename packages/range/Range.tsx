import { h, Component, prop, emit } from 'skatejs';
import styles from './Range.scss';
import { ColorType, cssClassForColorType, css } from '@blaze-elements/common';


// public
type RangeProps = Props & EventProps;
type Props = {
  value: number | string,
  min?: number | string,
  max?: number | string,
  disabled?: boolean,
  color?: ColorType,
};
type EventProps = {
  onKeyup?: typeof HTMLElement.prototype.onkeyup,
  onFocus?: typeof HTMLElement.prototype.onfocus,
  onBlur?: typeof HTMLElement.prototype.onblur,
  onChange?: ( ev: CustomEvent ) => void,
};

export class Range extends Component<RangeProps> {
  static get is() { return 'bl-range'; }
  static get props() {
    return {
      value: prop.number( {
        attribute: true
      } ),
      min: prop.number( {
        attribute: true
      } ),
      max: prop.number( {
        attribute: true
      } ),
      color: prop.string( {
        attribute: true
      } ),
      disabled: prop.boolean( {
        attribute: true
      } ),
    };
  }
  static get events() {
    return {
      change: 'change'
    };
  }

  color: ColorType;
  value: number;
  min = 0;
  max = 100;
  disabled: boolean;

  inputElement: HTMLInputElement;

  constructor() {
    super();
    this.setInputElementRef = this.setInputElementRef.bind( this );
    this.provideValue = this.provideValue.bind( this );
  }

  renderCallback() {
    const { color, value, min, max, disabled } = this;
    const colorClass = cssClassForColorType( 'c-range', color );
    const className = css( 'c-range', colorClass );

    return [
      <style>{styles}</style>,
      <input
        ref={this.setInputElementRef}
        className={className}
        type="range"
        value={value ? value.toString() : null}
        min={String( min )}
        max={String( max )}
        onChange={this.provideValue}
        disabled={disabled}
      />
    ];
  }

  private provideValue( event: Event ) {
    this.value = this.inputElement.valueAsNumber;
    emit( this, Range.events.change ); // emit change event on root element
  }
  private setInputElementRef( ref: HTMLInputElement ) {
    this.inputElement = ref;
  }
}


customElements.define( Range.is, Range );


