import { h, Component, prop, emit } from 'skatejs';
import { Size, cssClassForSize } from '../_helpers/sizes';
import styles from './Input.scss';
import { css } from '../_helpers/css';


type TypesType = {
  text: string,
  password: string,
  reset: string,
  hidden: string,
  number: string
};

type InputProps = Props & EventProps;
type EventProps = {
  onKeyup?: typeof HTMLElement.prototype.onkeyup,
  onFocus?: typeof HTMLElement.prototype.onfocus,
  onBlur?: typeof HTMLElement.prototype.onblur,
  onInput?: typeof HTMLElement.prototype.oninput,
  onChange?: (ev: CustomEvent) => void,
};
type Props = {
  value: string,
  valid?: string,
  placeholder?: string,
  disabled?: boolean,
  inputSize?: keyof Size,
  type?: keyof TypesType
};

export class Input extends Component<InputProps> {
  static get is() { return 'bl-input'; }
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
    };
  }
  static get events(){
    return {
      change: 'change',
    };
  }

  valid: string;
  value = '';
  inputSize: Size;
  placeholder: string;
  type = 'text';
  disabled: boolean;

  inputElement: HTMLInputElement;

  private propagateOnChange(event: Event) {
    this.setValue();
    emit(this, Input.events.change); // emit change event on root element
  }

  private setValue() {
    this.value = this.inputElement.value;
  }

  connectedCallback() {
    super.connectedCallback();
    this.propagateOnChange = this.propagateOnChange.bind(this);
    this.setValue = this.setValue.bind(this);
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
        ref={(_ref: HTMLInputElement) => this.inputElement = _ref}
        className={className}
        type={type}
        value={value}
        onChange={this.propagateOnChange}
        onInput={this.setValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    ];
  }
}


customElements.define( Input.is, Input );
