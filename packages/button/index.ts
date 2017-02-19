
import { customElement, GenericTypes } from '../_helpers';
import Button, { ButtonProps, Props, Events } from './Button';

export default customElement('bl-button')(Button) as typeof Button;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-button': GenericTypes.IntrinsicCustomElement<ButtonProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}
