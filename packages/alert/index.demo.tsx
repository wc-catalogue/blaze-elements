import { customElement, prop } from '@blaze-elements/common';
import { Component, h, props } from 'skatejs';

import AlertButton from './components/Button';
import { Alert } from './index';

type DemoProps = { isOpen?: boolean };

@customElement( 'bl-alert-demo' )
export class Demo extends Component<DemoProps> {

  @prop( { type: Boolean } ) isOpen = false;

  renderCallback() {
    const { isOpen } = this;

    return [
      <style />,

      <fieldset>
        <legend>{Alert.is}</legend>

        {!isOpen && <AlertButton onClick={this.handleAlertOpen}>Show alerts</AlertButton>}

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
    props( this, { isOpen: true } );
  }

  private handleAlertClose = () => {
    props( this, { isOpen: false } );
  }

}
