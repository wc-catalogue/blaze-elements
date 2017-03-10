import { customElement, GenericEvents } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import { Toggle } from './index';

@customElement( 'bl-toggle-demo' )
export class Demo extends Component<void> {
  toggleChecked = false;

  constructor() {
    super();
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange = ( event: GenericEvents.CustomChangeEvent<string> ) => {
    this.toggleChecked = event.detail.value;
    console.log( 'Toggle: onChange triggered with value: ', event.detail.value );
  }

  renderCallback() {
    return (
      <fieldset>
        <legend>{Toggle.is}</legend>

        <div>
          <Toggle checked={true} color="brand">Yo mama</Toggle>
          <Toggle disabled>Yo mama</Toggle>
          <Toggle checked={this.toggleChecked} onChange={this.handleChange}>Toggle on-change</Toggle>
        </div>

      </fieldset>
    );
  }
}
