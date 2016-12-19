import { h, Component } from 'skatejs';
import { Collapsible } from './Collapsible';
import { CollapsibleItem } from './CollapsibleItem';
import styles from './Collapsible.scss';

export class Demo extends Component<void> {
  static get is() { return 'bl-collapsible-demo'}

  renderCallback() {
    return [
      <style>{styles}</style>,
        <fieldset>
          <legend>{Collapsible.is}</legend>

          <h3>Single item</h3>
          <Collapsible isOpened>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some content <strong>!!!</strong>
            </div>
          </Collapsible>

          <hr />

          <h3>Two items in card</h3>
          <div className="c-card">
            <CollapsibleItem>
              <span slot="title">Some <strong>Name</strong></span>
              <div>
                Some content <strong>!!!</strong>
              </div>
            </CollapsibleItem>
            <CollapsibleItem isOpened isLast>
              <span slot="title">Some <strong>Name</strong></span>
              <div>
                Some content <strong>!!!</strong>
              </div>
            </CollapsibleItem>
          </div>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

