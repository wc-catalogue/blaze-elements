import { customElement } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import { Tooltip } from './index';

@customElement( 'bl-tooltip-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return (
      <fieldset>
        <legend>{Tooltip.is}</legend>

        <div>
          <Tooltip label="this is label of tooltip">Tooltip default</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="top">Tooltip top</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="left">Tooltip left</Tooltip><br />
          <Tooltip label="this is label of tooltip" type="bottom">Tooltip bottom</Tooltip>
        </div>

      </fieldset>
    );
  }
}
