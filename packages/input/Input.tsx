import { h, Component, prop, emit } from 'skatejs';
import styles from './Input.scss';
import { css } from '../../utils/css';


const InputSizes = {
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
  'super': 'super' // super is reserved word!!!
};

type TypesType = {
  text: string,
  password: string,
  reset: string,
  hidden: string,
  number: string
}

type InputSizesType = typeof InputSizes;

//public
interface InputProps extends JSX.HTMLProps<HTMLInputElement | any> {
  value: string,
  valid?: string,
  placeholder?: string,
  disabled?: boolean,
  inputSize?: keyof InputSizesType,
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
      valid: prop.string(),
      placeholder: prop.string(),
      disabled: prop.boolean(),
      type: prop.string(),
      inputSize: prop.string(),
    }
  }

  valid: string;
  value = '';
  inputSize: string;
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
    const className = css(
      'c-field',
      {
        'c-field--success': valid === 'true',
        'c-field--error': valid === 'false',
        'u-xsmall': inputSize === InputSizes.xsmall,
        'u-small': inputSize === InputSizes.small,
        'u-medium': inputSize === InputSizes.medium,
        'u-large': inputSize === InputSizes.large,
        'u-xlarge': inputSize === InputSizes.xlarge,
        'u-super': inputSize === InputSizes.super
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


