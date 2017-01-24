import { h, Component } from 'skatejs';
import { Toggle } from './Toggle';

class Demo extends Component<void> {
  static get is() {return 'bl-toggle-demo'; };

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Toggle.is}</legend>

        <div>
          <Toggle checked={true} color="brand">Yo mama</Toggle>
          <Toggle disabled>Yo mama</Toggle>
        </div>

      </fieldset>
    ];
  }
}


customElements.define( Demo.is, Demo );
