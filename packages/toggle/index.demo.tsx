import { h, Component } from 'skatejs';
import { Toggle } from './Toggle';
import { GenericEvents } from '../_helpers/index';

class Demo extends Component<void> {
  static get is() { return 'bl-toggle-demo'; };
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
    return [
      <style />,
      <fieldset>
        <legend>{Toggle.is}</legend>

        <div>
          <Toggle checked={true} color="brand">Yo mama</Toggle>
          <Toggle disabled>Yo mama</Toggle>
          <Toggle checked={this.toggleChecked} onChange={this.handleChange}>Toggle on-change</Toggle>
        </div>

      </fieldset>
    ];
  }
}


customElements.define( Demo.is, Demo );
