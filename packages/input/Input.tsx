import { h, Component, emit } from 'skatejs';
import styles from './Input.scss';
import {
  Size,
  cssClassForSize,
  css,
  GenericEvents,
  prop,
  shadyCssStyles
} from '@blaze-elements/common';


export type TypesType = {
  text: string,
  password: string,
  reset: string,
  hidden: string,
  number: string
};

export type InputProps = Props & EventProps;
export type EventProps = {
  onKeyup?: GenericEvents.KeyupHandler,
  onFocus?: GenericEvents.FocusHandler,
  onBlur?: GenericEvents.BlurHandler,
  onChange?: GenericEvents.CustomChangeHandler<string>,
};
export type Events = {
  keyup?: GenericEvents.KeyupHandler,
  focus?: GenericEvents.FocusHandler,
  blur?: GenericEvents.BlurHandler,
  change?: GenericEvents.CustomChangeHandler<string>,
};
export type Props = {
  value: string,
  valid?: string,
  placeholder?: string,
  disabled?: boolean | null,
  inputSize?: keyof Size,
  type?: keyof TypesType
};

@shadyCssStyles()
export default class Input extends Component<InputProps> {

  get css() { return styles; }

  @prop( { type: String, attribute: { source: true } } ) value: string;
  @prop( { type: String, attribute: { source: true } } ) placeholder: string;
  @prop( { type: String, attribute: { source: true } } ) type = 'text';
  @prop( { type: String, attribute: { source: true } } ) inputSize: Size;
  @prop( { type: String, attribute: { source: true } } ) valid: string;
  // @prop( { type: Boolean, attribute: { source: true } } ) disabled: boolean;

  disabled: boolean | null = null;

  static get events() {
    return {
      change: 'change',
    };
  }

  constructor() {
    super();
    this.propagateOnChange = this.propagateOnChange.bind( this );
  }

  renderCallback() {
    const { valid, value, placeholder, disabled, inputSize, type } = this;
    const sizeClass = cssClassForSize( inputSize );
    const className = css(
      'c-field',
      sizeClass,
      {
        'c-field--success': valid === 'true',
        'c-field--error': valid === 'false',
      }
    );

    return [
      <input
        className={className}
        type={type}
        value={value}
        onInput={this.propagateOnChange}
        onChange={this.propagateOnChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    ];
  }

  private propagateOnChange( event: Event ) {
    // stop propagation native event to prevent leaky api
    event.stopImmediatePropagation();

    // emit change event on root element
    const input: Partial<HTMLInputElement> = event.target;
    emit( this, Input.events.change, { detail: { value: input.value } } );
  }

}
