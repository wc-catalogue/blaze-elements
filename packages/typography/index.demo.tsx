import { h, Component } from 'skatejs';
import {AbbreviationDemo} from './Abbreviation.demo';
import { BlockquoteDemo } from './Blockquote.demo'
import { CodeDemo } from './Code.demo'
import { HighlightedTextDemo } from './HighlightedText.demo'
import { LinkDemo } from './Link.demo'
import { LoudTextDemo } from './LoudText.demo'
import { QuietTextDemo } from './QuietText.demo'
import { KeyboardKeysDemo } from './KeyboardKeys.demo'
import { MonospaceTextDemo } from './MonospaceText.demo'
import { ParagraphDemo } from './Paragraph.demo'

export class Demo extends Component<void> {
  static get is() { return 'bl-typography-demo'}

  renderCallback() {
    return [
      <fieldset>
        <legend>{Demo.is}</legend>
        <ParagraphDemo />
        <AbbreviationDemo />
        <LinkDemo />
        <LoudTextDemo />
        <QuietTextDemo />
        <HighlightedTextDemo />
        <KeyboardKeysDemo />
        <MonospaceTextDemo />
        <CodeDemo />
        <BlockquoteDemo />
      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );

