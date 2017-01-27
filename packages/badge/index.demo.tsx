import { h, Component } from 'skatejs';
import { Badge } from './Badge';

export class Demo extends Component<void> {
  static get is() { return 'bl-badge-demo'; }

  renderCallback() {
    return [
      <style />,
      <fieldset>
        <legend>{Badge.is}</legend>

        <div>
          <Badge>Brand</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="error">Error</Badge>
        </div>
        <div>
          <Badge rounded>Brand rounded</Badge>
          <Badge rounded color="info">Info rounded</Badge>
          <Badge rounded color="warning">Warning rounded</Badge>
          <Badge rounded color="success">Success rounded</Badge>
          <Badge rounded color="error">Error rounded</Badge>
        </div>
        <div>
          <Badge ghost>Brand ghost</Badge>
          <Badge ghost color="info">Info ghost</Badge>
          <Badge ghost color="warning">Warning ghost</Badge>
          <Badge ghost color="success">Success ghost</Badge>
          <Badge ghost color="error">Error ghost</Badge>
        </div>
        <div>
          <Badge ghost rounded>Brand ghost rounded</Badge>
          <Badge ghost rounded color="info">Info ghost rounded</Badge>
          <Badge ghost rounded color="warning">Warning ghost rounded</Badge>
          <Badge ghost rounded color="success">Success ghost rounded</Badge>
          <Badge ghost rounded color="error">Error ghost rounded</Badge>
        </div>

      </fieldset>

    ];
  }
}


customElements.define(Demo.is, Demo);
