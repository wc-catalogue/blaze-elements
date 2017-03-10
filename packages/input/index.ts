import { customElement, GenericTypes } from '@blaze-elements/common';
import RawInput, {
  Events,
  InputProps,
  Props
} from './Input';
const Input = customElement( 'bl-input' )( RawInput ) as typeof RawInput;
export { Input };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-input': GenericTypes.IntrinsicCustomElement<InputProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}
