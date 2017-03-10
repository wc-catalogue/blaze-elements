
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawOption, { Events as EventsOption, OptionProps, Props as PropsOption } from './Option';
import RawSelect, { Events, Props, SelectProps } from './Select';

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
