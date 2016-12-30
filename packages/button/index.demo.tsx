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
            color="brand"
          >Click me</Button>
          <Button
            color="brand"
          >Click me</Button>
          <Button
            ghost
            color="warning"
          >Click me</Button>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

