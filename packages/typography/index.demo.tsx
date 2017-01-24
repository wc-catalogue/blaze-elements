import { h, Component } from 'skatejs';
import { Paragraph } from './Paragraph';
import { Abbreviation } from './Abbreviation';
import { Link } from './Link';
import { LoudText } from './LoudText';
import { QuietText } from './QuietText';
import { HighlightedText } from './HighlightedText';
import { KeyboardKeys } from './KeyboardKeys';
import { MonospaceText } from './MonospaceText';
import { Code } from './Code';
import { Blockquote } from './Blockquote';

export class Demo extends Component<void> {
  static get is() { return 'bl-typography-demo'; }

  renderCallback() {
    return [
      <fieldset>
        <legend>{Paragraph.is}</legend>
        <Paragraph>Some paragraph content</Paragraph>
      </fieldset>,
      <fieldset>
        <legend>{Abbreviation.is}</legend>
        <Abbreviation title="Some abbreviation title">Some abbreviation content</Abbreviation>
      </fieldset>,
      <fieldset>
        <legend>{Link.is}</legend>
        <p>Link API is the same as: <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">MDN specification</Link></p>
        <div>
          <Link href="http://www.seznam.cz">Czech search engine</Link><br />
          <Link href="http://www.seznam.cz" target="_blank">Czech search engine with target blank</Link><br />
          <Link color="brand">Brand link</Link><br />
          <Link color="info">Info link</Link><br />
          <Link color="warning">Warning link</Link><br />
          <Link color="success">Success link</Link><br />
          <Link color="error">Error link</Link><br />
        </div>

      </fieldset>,
      <fieldset>
        <legend>{LoudText.is}</legend>
        Content with <LoudText>some loud text</LoudText> and some normal text.
      </fieldset>,
      <fieldset>
        <legend>{QuietText.is}</legend>
        Content with <QuietText>some quiet text</QuietText> and some normal text.
      </fieldset>,
      <fieldset>
        <legend>{HighlightedText.is}</legend>
        Content with <HighlightedText>some highlighted text</HighlightedText> and some normal text.
      </fieldset>,
      <fieldset>
        <legend>{KeyboardKeys.is}</legend>
        Content with some <KeyboardKeys>keybord+key</KeyboardKeys> and some normal text.
      </fieldset>,
      <fieldset>
        <legend>{MonospaceText.is}</legend>
        Content with <MonospaceText>some monospace text</MonospaceText> and some normal text.
      </fieldset>,
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
      </fieldset>,
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
    ];
  }
}

customElements.define( Demo.is, Demo );
