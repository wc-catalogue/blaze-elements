import { customElement, GenericTypes } from '@blaze-elements/common';
import RawAlert, {
  AlertProps,
  Events,
  Props
} from './Alert';
const Alert = customElement( 'bl-alert' )( RawAlert ) as typeof RawAlert;
export { Alert };

// extend JSX.IntrinsicElements namepsace with our definition
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-alert': GenericTypes.IntrinsicCustomElement<AlertProps>
      & GenericTypes.IntrinsicBoreElement<Props, Events>,
    }
  }
}
