import { prop } from '@blaze-elements/common';
import { Component, emit, h } from 'skatejs';

import styles from './Modal.scss';

import ModalButton from './components/Button';
import ModalCard from './components/Card';
import ModalOverlay from './components/Overlay';

const DEFAULT_CLOSE_TITLE = 'close';
const ESC_KEY_CODE = 27;

export interface ModalProps {
  isOpen?: boolean,
  closeTitle?: string,
  onModalClose?(): void,
}

export default class Modal extends Component<ModalProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) isOpen = false;

  @prop( {
    type: String
  } ) closeTitle = DEFAULT_CLOSE_TITLE;

  private modalElement: HTMLDivElement;
  private lastActiveElement: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    this.handleEsc = this.handleEsc.bind( this );
    this.handleModalClose = this.handleModalClose.bind( this );
    this.focusModal = this.focusModal.bind( this );
  }
  renderCallback() {
    const { isOpen, closeTitle } = this;

    return [
      <style>{styles}</style>,
      isOpen &&
      <ModalOverlay
        isFullpage
        tabIndex={-1}
        onFocus={this.focusModal}
      />,
      isOpen &&
      <div
        ref={this.setModalElementRef}
        tabIndex={-1}
        class="o-modal"
        role="dialog"
        aria-labelledby="modal-heading"
        aria-describedby="modal-body"
        onKeydown={this.handleEsc}
      >
        <ModalCard>
          <ModalButton
            slot="dismiss"
            aria-label={closeTitle}
            onClick={this.handleModalClose}
          >
            x
          </ModalButton>
          <div slot="heading" id="modal-heading">
            <slot name="title" />
          </div>
          <div slot="body" id="modal-body">
            <slot />
          </div>
          <div slot="footer">
            <slot name="footer" />
          </div>
        </ModalCard>
      </div>
    ];
  }

  renderedCallback() {
    if ( this.isOpen ) {
      this.lastActiveElement = this.deepActiveElement();

      this.focusModal();

      this.preventModalBlur();
    } else {
      this.allowModalBlur();

      if ( this.lastActiveElement ) {
        this.lastActiveElement.focus();
      }
    }
  }

  private deepActiveElement(): HTMLElement {
    let activeElement = document.activeElement;
    while ( activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement ) {
      activeElement = activeElement.shadowRoot.activeElement;
    }

    return activeElement as HTMLElement;
  }

  private handleEsc( evt: KeyboardEvent ) {
    if ( evt.which === ESC_KEY_CODE ) {
      this.handleModalClose();
    }
  }
  private handleModalClose() {
    this.isOpen = false;
    emit( this, 'modalClose' );
  }
  private focusModal() {
    this.modalElement.focus();
  }

  private handleDocumentFocus( event: FocusEvent ) {
    if ( this.modalElement && !this.modalElement.contains( event.target as Node ) ) {
      event.stopImmediatePropagation();
      this.focusModal();
    }
  }

  private preventModalBlur() {
    document.addEventListener( 'focus', this.handleDocumentFocus.bind( this ), true );
  }
  private allowModalBlur() {
    document.removeEventListener( 'focus', this.handleDocumentFocus.bind( this ), true );
  }
  private setModalElementRef( ref: HTMLDivElement ) {
    this.modalElement = ref;
  }

}
