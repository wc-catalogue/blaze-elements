import { h, Component } from 'skatejs';
import { Code } from './Code';

export class CodeDemo extends Component<void> {
  static get is() { return 'bl-code-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{Code.is}</legend>
          There is <Code>some inline code</Code> in the text.
          <br />
          And here:
          <Code isMultiline>
            // There is some multi-line code <br />
            if ( true ) <br />
            &nbsp;&nbsp;return 'YEAH';
          </Code>
        </fieldset>
    ]
  }
}

customElements.define( CodeDemo.is, CodeDemo );
