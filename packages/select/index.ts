
import { GenericTypes, customElement } from '@blaze-elements/common';
import RawSelect, { SelectProps, Props, Events } from './Select';
import RawOption, { OptionProps, Props as PropsOption, Events as EventsOption } from './Option';

const Select = customElement( 'bl-select' )( RawSelect ) as typeof RawSelect;
const Option = customElement( 'bl-option' )( RawOption ) as typeof RawOption;

export {
  Select,
  Option,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-select': GenericTypes.IntrinsicCustomElement<SelectProps> &
      GenericTypes.IntrinsicBoreElement<Props, Events>
      'bl-option': GenericTypes.IntrinsicCustomElement<OptionProps> &
      GenericTypes.IntrinsicBoreElement<PropsOption, EventsOption>
    }
  }
}
