import { h, Component } from 'skatejs';
import { Tooltip } from './Tooltip';

export class Demo extends Component<void> {
  static get is() { return 'bl-tooltip-demo' }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Tooltip.is}</legend>

        <div>
          <Tooltip label="this is label of tooltip">Tooltip default</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="top">Tooltip top</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="left">Tooltip left</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="bottom">Tooltip bottom</Tooltip>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
