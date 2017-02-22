
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawButton, { ButtonProps, Props, Events } from './Button';

const Button = customElement( 'bl-button' )( RawButton ) as typeof RawButton;

export {
  Button
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-button': GenericTypes.IntrinsicCustomElement<ButtonProps> & GenericTypes.IntrinsicBoreElement<Props, Events>
    }
  }
}
