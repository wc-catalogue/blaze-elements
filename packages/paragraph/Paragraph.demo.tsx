import { h, Component } from 'skatejs';
import { Paragraph } from './Paragraph';

export class Demo extends Component<void> {
  static get is() { return 'bl-paragraph-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{Paragraph.is}</legend>
          <Paragraph>Some paragraph content</Paragraph>
        </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

