import { h, Component } from 'skatejs';
import { QuietText } from './QuietText';

export class Demo extends Component<void> {
  static get is() { return 'bl-quiet-text-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{QuietText.is}</legend>
          Content with <QuietText>some quiet text</QuietText> and some normal text.
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
