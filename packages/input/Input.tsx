import { h, Component, prop, emit } from 'skatejs';
import {Size, cssClassForSize} from '../utils/sizes'
import styles from './Input.scss';
import { css } from '../../utils/css';


type TypesType = {
  text: string,
  password: string,
  reset: string,
  hidden: string,
  number: string
}

//public
interface InputProps extends JSX.HTMLProps<HTMLInputElement | any> {
  value: string,
  valid?: string,
  placeholder?: string,
  disabled?: boolean,
  inputSize?: keyof Size,
  type?: keyof TypesType
}

export class Input extends Component<InputProps> {
  _props: InputProps;
  static get is() { return 'bl-input' }
  static get props() {
    return {
      value: prop.string({
        attribute: true
      }),
      valid: prop.string({
        attribute: true
      }),
      placeholder: prop.string({
        attribute: true
      }),
      disabled: prop.boolean({
        attribute: true
      }),
      type: prop.string({
        attribute: true
      }),
      inputSize: prop.string({
        attribute: true
      }),
    }
  }

  valid: string;
  value = '';
  inputSize: Size;
  placeholder: string;
  type = 'text';
  disabled: boolean;

  inputElement: HTMLInputElement;

  private provideValue(event: Event) {
    this.value = this.inputElement.value;
    emit(this,'change'); // emit change event on root element
  }

  connectedCallback(){
    super.connectedCallback();
    this.provideValue = this.provideValue.bind(this);
  }

  renderCallback() {
    const { valid, value, placeholder, disabled, inputSize, type } = this;
    const sizeClass = cssClassForSize(inputSize);
    const className = css(
      'c-field',
      sizeClass,
      {
        'c-field--success': valid === 'true',
        'c-field--error': valid === 'false',
      }
    );

    return [
      <style>{styles}</style>,
      <input
        ref={(_ref: HTMLInputElement)=>this.inputElement=_ref}
        className={className}
        type={type}
        value={value}
        onChange={this.provideValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    ]
  }
}


customElements.define( Input.is, Input );
