import { h, Component } from 'skatejs';
import { Collapsible } from './Collapsible';
import styles from './Collapsible.scss';

export class Demo extends Component<void> {
  static get is() { return 'bl-collapsible-demo'; }

  renderCallback() {
    return [
      <style>{styles}</style>,
      <fieldset>
        <legend>{Collapsible.is}</legend>

        <Collapsible isOpened>
          <span slot="title">Some <strong>Name</strong></span>
          <div>
            Some content <strong>!!!</strong>
          </div>
        </Collapsible>
      </fieldset>
    ];
  }
}

customElements.define( Demo.is, Demo );

