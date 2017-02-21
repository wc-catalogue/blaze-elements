import { h, Component, prop, emit } from 'skatejs';
import styles from './Modal.scss';
import { Button } from '../button';
import { Card } from '../card/Card';
import { Overlay } from '../overlay/Overlay';

interface ModalProps {
  isOpen?: boolean,
  closeTitle?: string,
  onModalClose?: Function,
}
export class Modal extends Component<ModalProps> {
  static get is() { return 'bl-modal'; }
  static get props() {
    return {
      isOpen: prop.boolean( {
        attribute: true
      } ),
      closeTitle: prop.string()
    };
  }

  isOpen = false;
  private closeTitle = 'close';
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
      <Overlay
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
        <Card>
          <Button
            slot="dismiss"
            aria-label={closeTitle}
            onClick={this.handleModalClose}
          >
            x
          </Button>
          <div slot="heading" id="modal-heading">
            <slot name="title" />
          </div>
          <div slot="body" id="modal-body">
            <slot />
          </div>
          <div slot="footer">
            <slot name="footer" />
          </div>
        </Card>
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
    if ( evt.which === 27 ) {
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

customElements.define( Modal.is, Modal );
