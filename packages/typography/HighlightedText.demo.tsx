import { h, Component } from 'skatejs';
import { HighlightedText } from './HighlightedText';

export class HighlightedTextDemo extends Component<void> {
  static get is() { return 'bl-highlighted-text-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{HighlightedText.is}</legend>
          Content with <HighlightedText>some highlighted text</HighlightedText> and some normal text.
        </fieldset>
    ]
  }
}

customElements.define( HighlightedTextDemo.is, HighlightedTextDemo );

