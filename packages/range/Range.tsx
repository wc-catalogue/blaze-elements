import { h, Component, prop, emit } from 'skatejs';
import styles from './Range.scss';
import {ColorType, cssClassForColorType} from '../utils/colorTypes'
import { css } from '../../utils/css';


//public
interface RangeProps extends JSX.HTMLProps<HTMLInputElement | any> {
  color?: keyof ColorType,
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

  color: ColorType;
  value: number;
  min = 0;
  max = 100;
  disabled: boolean;

  inputElement: HTMLInputElement;

  private provideValue(event: Event) {
    const oldValue = this.value;
    this.value = this.inputElement.valueAsNumber;
    emit(this,'change'); // emit change event on root element
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
        ref={(_ref: HTMLInputElement)=>this.inputElement=_ref}
        className={className}
        type="range"
        value={value ? value.toString() : null}
        min={min}
        max={max}
        onChange={this.provideValue}
        disabled={disabled}
      />
    ]
  }
}


customElements.define( Range.is, Range );


