import { h, Component, prop, props, define } from 'skatejs';
import { Alert } from './index';

import { Button } from '../button';

type DemoProps = { isOpen?: boolean };
export class Demo extends Component<DemoProps> {
  static get is() { return 'bl-alert-demo'; }
  static get props() {
    return {
      isOpen: prop.boolean()
    };
  }

  isOpen = false;

  renderCallback() {
    const {isOpen} = this;
    return [
      <style />,

      <fieldset>
        <legend>{Alert.is}</legend>

        {!isOpen && <Button onClick={this.handleAlertOpen}>Show alerts</Button>}

        <div>
          <bl-alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose}>Alert default via dom element</bl-alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose}>Alert default</Alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose} color="brand">Alert brand</Alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose} color="warning">Alert warning</Alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose} color="info">Alert info</Alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose} color="success">Alert success</Alert>
          <Alert isOpen={this.isOpen} onAlertClose={this.handleAlertClose} color="error">Alert error</Alert>
        </div>

      </fieldset>
    ];
  }

  private handleAlertOpen = () => {
    props( this, { isOpen: true });
  }
  private handleAlertClose = () => {
    props( this, { isOpen: false });
  }

}

define( Demo );
