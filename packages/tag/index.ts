import { customElement, GenericTypes } from '@blaze-elements/common';
import RawTag, {
  Events,
  Props,
  TagProps
} from './Tag';
import RawTagSelector, {
  Events as EventsTagSelector,
  Props as PropsTagSelector,
  TagSelectorProps
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
