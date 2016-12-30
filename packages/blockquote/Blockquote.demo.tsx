import { h, Component } from 'skatejs';
import { Blockquote } from './Blockquote';

export class Demo extends Component<void> {
  static get is() { return 'bl-blockquote-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{Blockquote.is}</legend>
          <Blockquote>
            Some text here
          </Blockquote>

          <br />

          <Blockquote color="success">
            Some text here
          </Blockquote>

          <br />

          <Blockquote color="brand">
            Some text here
            <span slot="footer">Blaze elements demo</span>
          </Blockquote>

          <br />

          <Blockquote color="error">
            Some error text here
            <span slot="footer">Blaze elements demo</span>
          </Blockquote>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
