import { h, Component } from 'skatejs';
import { Accordion } from './Accordion';
import { Collapsible } from '../collapsible/Collapsible';

export class Demo extends Component<void> {
  static get is() { return 'bl-accordion-demo'; }

  renderCallback() {
    return [
      <style></style>,
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
    ];
  }
}

customElements.define( Demo.is, Demo );

