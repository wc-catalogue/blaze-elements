import { customElement, prop } from '@blaze-elements/common';
import { Component, h } from 'skatejs';

import { Progress } from './index';

@customElement( 'bl-progress-demo' )
export class Demo extends Component<void> {

  @prop( {
    type: Number
  } ) val: number;

  renderCallback() {
    return (
      <fieldset>
        <legend>{Progress.is}</legend>

        <div>
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={5}
            rounded
          />
          <br />
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={10}
            color="brand"
            displaySize="small"
          />
          <br />
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={40}
            color="info"
            displaySize="medium"
          />
          <br />
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={90}
            color="warning"
            displaySize="large"
          />
          <br />
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={99}
            color="error"
            displaySize="xlarge"
          />
          <br />
          <Progress
            // tslint:disable-next-line:no-magic-numbers
            value={100}
            color="success"
            displaySize="super"
          >
            DONE
          </Progress>
        </div>

      </fieldset>
    );
  }

}
