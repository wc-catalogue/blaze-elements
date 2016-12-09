import { h, Component } from 'skatejs';
import { Card } from './Card';

export class Demo extends Component<void> {
  static get is() { return 'bl-card-demo' }

  renderCallback() {
    return [
      <style></style>,

      <fieldset>
        <legend>{Card.is}</legend>

        <div>
          <Card>
            <span slot="title">Hello</span>
            <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
            <span slot="footer">Footer baby</span>
          </Card>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
