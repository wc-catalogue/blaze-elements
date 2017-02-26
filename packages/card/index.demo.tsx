import { h, Component } from 'skatejs';
import { customElement } from '@blaze-elements/common';

import { Card, CardItem } from './index';

@customElement('bl-card-demo')
export class Demo extends Component<void> {

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
