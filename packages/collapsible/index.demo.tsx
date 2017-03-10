import { customElement } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import { Collapsible } from './index';

@customElement( 'bl-collapsible-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return (
      <fieldset>
        <legend>{Collapsible.is}</legend>

        <Collapsible isOpened>
          <span slot="title">Some <strong>Name</strong></span>
          <div>
            Some content <strong>!!!</strong>
          </div>
        </Collapsible>
      </fieldset>
    );
  }
}
