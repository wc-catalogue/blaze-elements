
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawCalendar, { Attrs, CalendarProps, Events } from './Calendar';

const Calendar = customElement( 'bl-calendar' )( RawCalendar ) as typeof RawCalendar;

export {
  Calendar
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-calendar': GenericTypes.IntrinsicCustomElement<CalendarProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
