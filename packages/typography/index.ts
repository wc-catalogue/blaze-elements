
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawAbbreviation, { AbbreviationProps, AbbreviationAttrs, AbbreviationEvents } from './Abbreviation';
import RawBlockquote, { BlockquoteProps, BlockquoteAttrs, BlockquoteEvents } from './Blockquote';
import RawCode, { CodeProps, CodeAttrs, CodeEvents } from './Code';
import RawHighlightedText, {
  HighlightedTextProps, HighlightedTextAttrs, HighlightedTextEvents
} from './HighlightedText';
import RawKeyboardKeys, { KeyboardKeysProps, KeyboardKeysAttrs, KeyboardKeysEvents } from './KeyboardKeys';
import RawLink, { LinkProps, LinkAttrs, LinkEvents } from './Link';
import RawLoudText, { LoudTextProps, LoudTextAttrs, LoudTextEvents } from './LoudText';
import RawMonospaceText, { MonospaceTextProps, MonospaceTextAttrs, MonospaceTextEvents } from './MonospaceText';
import RawParagraph, { ParagraphProps, ParagraphAttrs, ParagraphEvents } from './Paragraph';
import RawQuietText, { QuietTextProps, QuietTextAttrs, QuietTextEvents } from './QuietText';

const Abbreviation = customElement( 'bl-abbreviation' )( RawAbbreviation ) as typeof RawAbbreviation;
const Blockquote = customElement( 'bl-blockquote' )( RawBlockquote ) as typeof RawBlockquote;
const Code = customElement( 'bl-code' )( RawCode ) as typeof RawCode;
const HighlightedText = customElement( 'bl-highlighted-text' )( RawHighlightedText ) as typeof RawHighlightedText;
const KeyboardKeys = customElement( 'bl-keyboard-keys' )( RawKeyboardKeys ) as typeof RawKeyboardKeys;
const Link = customElement( 'bl-link' )( RawLink ) as typeof RawLink;
const LoudText = customElement( 'bl-loud-text' )( RawLoudText ) as typeof RawLoudText;
const MonospaceText = customElement( 'bl-monospace-text' )( RawMonospaceText ) as typeof RawMonospaceText;
const Paragraph = customElement( 'bl-paragraph' )( RawParagraph ) as typeof RawParagraph;
const QuietText = customElement( 'bl-quiet-text' )( RawQuietText ) as typeof RawQuietText;

export {
  Abbreviation,
  Blockquote,
  Code,
  HighlightedText,
  KeyboardKeys,
  Link,
  LoudText,
  MonospaceText,
  Paragraph,
  QuietText,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-abbreviation': GenericTypes.IntrinsicCustomElement<AbbreviationProps>
      & GenericTypes.IntrinsicBoreElement<AbbreviationAttrs, AbbreviationEvents>
      'bl-blockquote': GenericTypes.IntrinsicCustomElement<BlockquoteProps>
      & GenericTypes.IntrinsicBoreElement<BlockquoteAttrs, BlockquoteEvents>
      'bl-code': GenericTypes.IntrinsicCustomElement<CodeProps>
      & GenericTypes.IntrinsicBoreElement<CodeAttrs, CodeEvents>
      'bl-highlighted-text': GenericTypes.IntrinsicCustomElement<HighlightedTextProps>
      & GenericTypes.IntrinsicBoreElement<HighlightedTextAttrs, HighlightedTextEvents>
      'bl-keyboard-keys': GenericTypes.IntrinsicCustomElement<KeyboardKeysProps>
      & GenericTypes.IntrinsicBoreElement<KeyboardKeysAttrs, KeyboardKeysEvents>
      'bl-link': GenericTypes.IntrinsicCustomElement<LinkProps>
      & GenericTypes.IntrinsicBoreElement<LinkAttrs, LinkEvents>
      'bl-loud-text': GenericTypes.IntrinsicCustomElement<LoudTextProps>
      & GenericTypes.IntrinsicBoreElement<LoudTextAttrs, LoudTextEvents>
      'bl-monospace-text': GenericTypes.IntrinsicCustomElement<MonospaceTextProps>
      & GenericTypes.IntrinsicBoreElement<MonospaceTextAttrs, MonospaceTextEvents>
      'bl-paragraph': GenericTypes.IntrinsicCustomElement<ParagraphProps>
      & GenericTypes.IntrinsicBoreElement<ParagraphAttrs, ParagraphEvents>
      'bl-quiet-text': GenericTypes.IntrinsicCustomElement<QuietTextProps>
      & GenericTypes.IntrinsicBoreElement<QuietTextAttrs, QuietTextEvents>
    }
  }
}
