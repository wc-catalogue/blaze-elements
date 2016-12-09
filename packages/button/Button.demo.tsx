import { h, Component } from 'skatejs';
import { Button } from './Button';

export class Demo extends Component<void> {
  static get is() { return 'bl-button-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{Button.is}</legend>
          <Button
            disabled
            type="brand"
          >Click me</Button>
          <Button
            type="brand"
          >Click me</Button>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

