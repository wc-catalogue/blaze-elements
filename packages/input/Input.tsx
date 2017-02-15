import { h, Component, prop, emit } from 'skatejs';
import styles from './Input.scss';
import {
  Size, cssClassForSize, css,
  GenericTypes,
  GenericEvents
} from '../_helpers';


type TypesType = {
  text: string,
  password: string,
  reset: string,
  hidden: string,
  number: string
};

type InputProps = Props & EventProps;
type EventProps = {
  onKeyup?: GenericEvents.KeyupEvent,
  onFocus?: GenericEvents.FocusEvent,
  onBlur?: GenericEvents.BlurEvent,
  onChange?: ( ev: CustomEvent ) => void,
};
type Events = {
  keyup?: GenericEvents.KeyupEvent,
  focus?: GenericEvents.FocusEvent,
  blur?: GenericEvents.BlurEvent,
  change?: ( ev: CustomEvent ) => void,
};
type Props = {
  value: string,
  valid?: string,
  placeholder?: string,
  disabled?: boolean,
  inputSize?: keyof Size,
  type?: keyof TypesType
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-input': GenericTypes.IntrinsicCustomElement<InputProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}

export class Input extends Component<InputProps> {
  static get is() { return 'bl-input'; }

  static get props() {
    return {
      value: prop.string( {
        attribute: {
          source: true
        }
      } ),
      valid: prop.string( {
        attribute: {
          source: true
        }
      } ),
      placeholder: prop.string( {
        attribute: {
          source: true
        }
      } ),
      disabled: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      type: prop.string( {
        attribute: {
          source: true
        }
      } ),
      inputSize: prop.string( {
        attribute: {
          source: true
        }
      } ),
    };
  }

  static get events() {
    return {
      change: 'change',
    };
  }

  valid: string;
  value: string;
  inputSize: Size;
  placeholder: string;
  type = 'text';
  disabled: boolean;

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
      <style>{styles}</style>,
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
    emit( this, Input.events.change, { detail: { data: input.value } } );
  }

}
