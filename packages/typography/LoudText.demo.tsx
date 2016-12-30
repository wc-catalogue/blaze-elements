import { h, Component } from 'skatejs';
import { LoudText } from './LoudText';

export class LoudTextDemo extends Component<void> {
  static get is() { return 'bl-loud-text-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{LoudText.is}</legend>
          Content with <LoudText>some loud text</LoudText> and some normal text.
        </fieldset>
    ]
  }
}

customElements.define( LoudTextDemo.is, LoudTextDemo );
