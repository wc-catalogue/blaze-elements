import { h, Component, prop, emit } from 'skatejs';
import styles from './Modal.scss';
import { Button } from '../button/Button';
import { Card } from '../card/Card';

interface ModalProps extends JSX.HTMLProps<HTMLElement | any> {
  isOpen?: boolean,
  onModalClose?: Function,
}
export class Modal extends Component<ModalProps> {
  _props: ModalProps;
  static get is() { return 'bl-modal' }
  static get props() {
    return {
      isOpen: prop.boolean({
        attribute: true
      })
    }
  }

  isOpen = false;
  private modalElement: HTMLDivElement;
  private handleEsc(evt:KeyboardEvent){
    if ( evt.which === 27 ) {
      this.handleModalClose()
    }
  }
  private handleModalClose(){
    this.isOpen = !this.isOpen;
    emit(this,'modalClose')
  }
  connectedCallback(){
    super.connectedCallback();
    this.handleEsc = this.handleEsc.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  renderCallback() {
    const {isOpen} = this;
    return [
      <style>{styles}</style>,
      isOpen && <div class="c-overlay c-overlay--fullpage"/>,
      isOpen &&
      <div ref={(_ref: HTMLDivElement)=>this.modalElement=_ref}
           tabIndex={0}
           class="o-modal"
           onKeydown={this.handleEsc}
      >
       <Card>
         <Button
           slot="dismiss"
           onClick={this.handleModalClose}>
           x
         </Button>
         <div slot="title">
           <slot name="title"></slot>
         </div>
         <div slot="body">
           <slot></slot>
         </div>
         <div slot="footer">
           <slot name="footer"></slot>
         </div>
       </Card>
      </div>
    ]
  }

  renderedCallback() {
    if ( this.isOpen ) {
      this.modalElement.focus();
    }
  }
}

customElements.define( Modal.is, Modal )
