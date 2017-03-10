import {
  ColorType,
  css,
  cssClassForColorType,
  prop,
  shadyCssStyles
} from '@blaze-elements/common';
import { Component, emit, h, props } from 'skatejs';
import styles from './Range.scss';

export type RangeProps = Props & EventProps;

export type Attrs = {
  value?: number | string,
  min?: number | string,
  max?: number | string,
  disabled?: boolean,
  color?: ColorType,
};

export type Props = {
  value?: number | string,
  min?: number | string,
  max?: number | string,
  disabled?: boolean,
  color?: ColorType,
};

export type EventProps = {
  onKeyup?: typeof HTMLElement.prototype.onkeyup,
  onFocus?: typeof HTMLElement.prototype.onfocus,
  onBlur?: typeof HTMLElement.prototype.onblur,
  onChange?( ev: CustomEvent ): void,
};

export type Events = {};

@shadyCssStyles()
export default class Range extends Component<RangeProps> {

  static get events() {
    return {
      change: 'change'
    };
  }

  get css() { return styles; }

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) color: ColorType;

  @prop( {
    type: Number,
    attribute: {
      source: true
    }
  } ) value: number;

  @prop( {
    type: Number,
    attribute: {
      source: true
    }
  } ) min = 0;

  @prop( {
    type: Number,
    attribute: {
      source: true
    }
  } ) max = 100;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) disabled: boolean;

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

    return (
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
    );
  }

  private provideValue( event: Event ) {
    props( this, { value: this.inputElement.valueAsNumber } );
    emit( this, Range.events.change ); // emit change event on root element
  }
  private setInputElementRef( ref: HTMLInputElement ) {
    this.inputElement = ref;
  }
}
