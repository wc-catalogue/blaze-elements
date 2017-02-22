
import { GenericTypes } from '../_helpers';
import { SelectProps, Props, Events } from './Select';
import { OptionProps, Props as PropsOption, Events as EventsOption } from './Option';

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
