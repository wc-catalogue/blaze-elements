import { h, Component } from 'skatejs';
import { customElement, prop } from '@blaze-elements/common';

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
            value={5}
            rounded
          />
          <br />
          <Progress
            value={10}
            color="brand"
            displaySize="small"
          />
          <br />
          <Progress
            value={40}
            color="info"
            displaySize="medium"
          />
          <br />
          <Progress
            value={90}
            color="warning"
            displaySize="large"
          />
          <br />
          <Progress
            value={99}
            color="error"
            displaySize="xlarge"
          />
          <br />
          <Progress
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
