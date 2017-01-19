import { h, Component, prop, emit } from 'skatejs';
import styles from './Range.scss';
import {ColorType, cssClassForColorType} from '../_helpers/colorTypes'
import { css } from '../_helpers/css';


//public
type RangeProps = Props & EventProps;
type Props = {
  value: number | string,
  min?: number | string,
  max?: number | string,
  disabled?: boolean,
  color?: ColorType,
}
type EventProps = {
  onKeyup?: typeof HTMLElement.prototype.onkeyup,
  onFocus?: typeof HTMLElement.prototype.onfocus,
  onBlur?: typeof HTMLElement.prototype.onblur,
  onChange?: (ev:CustomEvent)=>void,
}

export class Range extends Component<RangeProps> {
  static get is() { return 'bl-range' }
  static get props() {
    return {
      value: prop.number({
        attribute: true
      }),
      min: prop.number({
        attribute: true
      }),
      max: prop.number({
        attribute: true
      }),
      color: prop.string({
        attribute: true
      }),
      disabled: prop.boolean({
        attribute: true
      }),
    }
  }
  static get events(){
    return {
      change: 'change'
    }
  }

  color: ColorType;
  value: number;
  min = 0;
  max = 100;
  disabled: boolean;

  inputElement: HTMLInputElement;

  private provideValue(event: Event) {
    const oldValue = this.value;
    this.value = this.inputElement.valueAsNumber;
    emit(this,Range.events.change); // emit change event on root element
  }

  connectedCallback(){
    super.connectedCallback();
    this.provideValue = this.provideValue.bind(this);
  }

  renderCallback() {
    const { color, value, min, max, disabled } = this;
    const colorClass = cssClassForColorType('c-range', color);
    const className = css('c-range', colorClass);

    return [
      <style>{styles}</style>,
      <input
        ref={(_ref)=>this.inputElement=_ref}
        className={className}
        type="range"
        value={value ? value.toString() : null}
        min={String(min)}
        max={String(max)}
        onChange={this.provideValue}
        disabled={disabled}
      />
    ]
  }
}


customElements.define( Range.is, Range );


