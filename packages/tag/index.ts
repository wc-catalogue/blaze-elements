import { customElement, GenericTypes } from '@blaze-elements/common';
import RawTag, {
  TagProps,
  Props,
  Events
} from './Tag';
import RawTagSelector, {
  TagSelectorProps,
  Props as PropsTagSelector,
  Events as EventsTagSelector
} from './TagSelector';

const Tag = customElement( 'bl-tag' )( RawTag ) as typeof RawTag;
const TagSelector = customElement( 'bl-tag-selector' )( RawTagSelector ) as typeof RawTagSelector;

export { Tag, TagSelector };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-tag': GenericTypes.IntrinsicCustomElement<TagProps>
      & GenericTypes.IntrinsicBoreElement<Props, Events>
      'bl-tag-selector': GenericTypes.IntrinsicCustomElement<TagSelectorProps>
      & GenericTypes.IntrinsicBoreElement<PropsTagSelector, EventsTagSelector>
    }
  }
}
