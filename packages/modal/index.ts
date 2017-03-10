
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawModal, { ModalProps } from './Modal';

const Modal = customElement( 'bl-modal' )( RawModal ) as typeof RawModal;

export {
  Modal
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-modal': GenericTypes.IntrinsicCustomElement<ModalProps>
    }
  }
}
