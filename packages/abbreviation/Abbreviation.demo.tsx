import { h, Component } from 'skatejs';
import { Abbreviation } from './Abbreviation';

export class Demo extends Component<void> {
  static get is() { return 'bl-abbreviation-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{Abbreviation.is}</legend>
          <Abbreviation title="Some abbreviation title">Some abbreviation content</Abbreviation>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

