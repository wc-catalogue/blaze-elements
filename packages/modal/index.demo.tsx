import { h, Component, prop } from 'skatejs';
import { Modal } from './Modal';
import { Button } from '../button/Button';

export class Demo extends Component<void> {
  static get is() { return 'bl-modal-demo'; }
  static get props() {
    return {
      isModalOpen: prop.boolean()
    };
  }

  isModalOpen = false;

  toggleModal() {
    console.log( 'toggleModal' );
    this.isModalOpen = !this.isModalOpen;
  }
  connectedCallback() {
    super.connectedCallback();
    this.toggleModal = this.toggleModal.bind( this );
  }

  renderCallback() {
    const { isModalOpen } = this;
    return [
      <style />,
      <fieldset>
        <legend>{Modal.is}</legend>

        <Button color="info" onClick={this.toggleModal}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onModalClose={this.toggleModal} closeTitle="Close me">
          <span slot="title">Modal <em>heading</em></span>
          <span>
            This is the modal body
            <input type="text" />
          </span>
          <span slot="footer">
            <Button onClick={this.toggleModal} color="brand">Close</Button>
          </span>
        </Modal>

      </fieldset>
    ];
  }
}

customElements.define( Demo.is, Demo );
