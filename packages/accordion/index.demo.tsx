import { h, Component } from 'skatejs';
import { customElement } from '@blaze-elements/common';

import { Accordion } from './index';
import { Collapsible } from '@blaze-elements/collapsible';

@customElement( 'bl-accordion-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return (
      <fieldset>
        <legend>{Accordion.is}</legend>

        <Accordion>
          <Collapsible>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some content <strong>!!!</strong>
            </div>
          </Collapsible>
          <Collapsible isOpened>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some content <strong>!!!</strong>
            </div>
          </Collapsible>
          <Collapsible>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some content <strong>!!!</strong>
            </div>
          </Collapsible>
        </Accordion>
      </fieldset>
    );
  }
}
