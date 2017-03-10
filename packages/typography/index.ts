
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawAbbreviation, { AbbreviationAttrs, AbbreviationEvents, AbbreviationProps } from './Abbreviation';
import RawBlockquote, { BlockquoteAttrs, BlockquoteEvents, BlockquoteProps } from './Blockquote';
import RawCode, { CodeAttrs, CodeEvents, CodeProps } from './Code';
import RawHighlightedText, {
  HighlightedTextAttrs, HighlightedTextEvents, HighlightedTextProps
} from './HighlightedText';
import RawKeyboardKeys, { KeyboardKeysAttrs, KeyboardKeysEvents, KeyboardKeysProps } from './KeyboardKeys';
import RawLink, { LinkAttrs, LinkEvents, LinkProps } from './Link';
import RawLoudText, { LoudTextAttrs, LoudTextEvents, LoudTextProps } from './LoudText';
import RawMonospaceText, { MonospaceTextAttrs, MonospaceTextEvents, MonospaceTextProps } from './MonospaceText';
import RawParagraph, { ParagraphAttrs, ParagraphEvents, ParagraphProps } from './Paragraph';
import RawQuietText, { QuietTextAttrs, QuietTextEvents, QuietTextProps } from './QuietText';

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
