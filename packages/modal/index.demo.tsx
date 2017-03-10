import { customElement, prop } from '@blaze-elements/common';
import { Component, h } from 'skatejs';

import Button from './components/Button';
import { Modal } from './index';

@customElement( 'bl-modal-demo' )
export class Demo extends Component<void> {

  @prop( {
    type: Boolean
  } ) isModalOpen = false;

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
