import { h, Component, prop, emit } from 'skatejs';
import styles from './Range.scss';
import { css } from '../../utils/css';


//public
interface RangeProps extends JSX.HTMLProps<HTMLInputElement | any> {
  valid?: string
}

export class Range extends Component<RangeProps> {
  _props: RangeProps;
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
      valid: prop.string({
        attribute: true
      }),
      disabled: prop.boolean({
        attribute: true
      }),
    }
  }

  valid: string;
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
    const { valid, value, min, max, disabled } = this;
    const className = css(
      'c-range',
      {
        'c-range--success': valid === 'true',
        'c-range--error': valid === 'false'
      }
    );

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


