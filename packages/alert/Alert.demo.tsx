import { h, Component, prop } from 'skatejs';
import { Alert } from './Alert';
import { Button } from '../button/Button';

export class Demo extends Component<void> {
  static get is() { return 'bl-alert-demo' }
  static get props(){
    return {
      isOpen: prop.boolean()
    }
  }

  isOpen = false;
  openAlert(){
    this.isOpen = true;
  }

  closeAlert(){
    this.isOpen = false;
  }

  connectedCallback(){
    super.connectedCallback();
    this.openAlert = this.openAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  renderCallback() {
    const {isOpen} = this;
    return [
      <style></style>,
      !isOpen && <Button onClick={this.openAlert}>Show alerts</Button>,
      <div>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert}>Alert default</Alert>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert} color="brand">Alert brand</Alert>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert} color="warning">Alert warning</Alert>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert} color="info">Alert info</Alert>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert} color="success">Alert success</Alert>
        <Alert isOpen={this.isOpen} onAlertClose={this.closeAlert} color="error">Alert error</Alert>
      </div>
    ]
  }
}

customElements.define( Demo.is, Demo );
