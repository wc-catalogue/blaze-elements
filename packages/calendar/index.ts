
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawCalendar, { CalendarProps, Attrs, Events } from './Calendar';

const Calendar = customElement( 'bl-app-layout' )( RawCalendar ) as typeof RawCalendar;

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
