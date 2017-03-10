import { customElement } from '@blaze-elements/common';
import { Component, h } from 'skatejs';

import { Card, CardContent, CardFooter, CardHeader, CardItem } from './index';

@customElement( 'bl-card-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return [
      <style />,

      <fieldset>
        <legend>{Card.is}</legend>

        <div>
          <Card>
            <CardHeader>Hello</CardHeader>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</CardContent>
            <CardFooter>Footer baby</CardFooter>
          </Card>

          <Card>
            <CardContent>
              <CardItem>Item 1</CardItem>
              <CardItem selected>Item 2</CardItem>
              <CardItem>Item 3</CardItem>
            </CardContent>
          </Card>
        </div>

      </fieldset>
    ];
  }
}
