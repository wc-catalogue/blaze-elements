import { h, Component, prop, emit } from 'skatejs';
import styles from './Input.scss';
import { Size, cssClassForSize, css } from '../_helpers';


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
  onChange?: ( ev: CustomEvent ) => void,
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
      'bl-input': InputProps & Partial<HTMLInputElement> & { events?: any }
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
      }),
      valid: prop.string( {
        attribute: {
          source: true
        }
      }),
      placeholder: prop.string( {
        attribute: {
          source: true
        }
      }),
      disabled: prop.boolean( {
        attribute: {
          source: true
        }
      }),
      type: prop.string( {
        attribute: {
          source: true
        }
      }),
      inputSize: prop.string( {
        attribute: {
          source: true
        }
      }),
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

  // @FIXME this should be private
  inputElement: HTMLInputElement;

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
    emit( this, Input.events.change, { detail: { data: input.value } });
  }

}
