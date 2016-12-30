import { h, Component } from 'skatejs';
import { MonospaceText } from './MonospaceText';

export class MonospaceTextDemo extends Component<void> {
  static get is() { return 'bl-monospace-text-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{MonospaceText.is}</legend>
          Content with <MonospaceText>some monospace text</MonospaceText> and some normal text.
        </fieldset>
    ]
  }
}

customElements.define( MonospaceTextDemo.is, MonospaceTextDemo );
