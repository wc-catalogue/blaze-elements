import { h, Component } from 'skatejs';
import { Card } from './Card';
import { CardItem } from './CardItem';

export class Demo extends Component<void> {
  static get is() { return 'bl-card-demo'; }

  renderCallback() {
    return [
      <style />,

      <fieldset>
        <legend>{Card.is}</legend>

        <div>
          <Card>
            <span slot="heading">Hello</span>
            <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
            <span slot="footer">Footer baby</span>
          </Card>

          <Card>
            <span slot="body">
              <CardItem>Item 1</CardItem>
              <CardItem selected>Item 2</CardItem>
              <CardItem>Item 3</CardItem>
            </span>
          </Card>
        </div>

      </fieldset>
    ];
  }
}

customElements.define( Demo.is, Demo );
