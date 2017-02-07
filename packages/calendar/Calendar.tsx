import { h, Component, prop, emit, props } from 'skatejs';
import styles from './Calendar.scss';

import * as getYear from 'date-fns/get_year';
import * as getMonth from 'date-fns/get_month';
import * as addDays from 'date-fns/add_days';
import * as getDate from 'date-fns/get_date';
import * as startOfWeek from 'date-fns/start_of_week';
import * as format from 'date-fns/format';
import * as isToday from 'date-fns/is_today';
import * as parse from 'date-fns/parse';
import * as isSameDay from 'date-fns/is_same_day';
import { css, buildFormatLocale, LocaleType, GenericEvents, GenericTypes } from '../_helpers';
import { CalendarButton } from './components/Button';

const BUTTON_TODAY = 'TODAY';
const WEEK_STARTS_ON = 'sunday';
const DAYS_IN_MATRIX = 41;

type WeekStart = 'sunday' | 'monday';

type CalendarProps = Props & EventProps;

type Attrs = {
  'selected-date'?: string,
  'week-starts-on'?: WeekStart,
};

type Props = {
  selectedDate?: Date,
  i18n?: {
    monthsFull: string[],
    weekdays2char: string[],
    todayButtonText: string,
  },
  weekStartsOn?: WeekStart,
};

type EventProps = {
  onDateChange?: GenericEvents.CustomChangeHandler<Date>,
};

type Events = {
  dateChange?: GenericEvents.CustomChangeHandler<Date>,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-calendar': GenericTypes.IntrinsicCustomElement<CalendarProps>
        & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}

export class Calendar extends Component<CalendarProps> {

  static get is() { return 'bl-calendar'; }

  static get props() {
    return {
      year: prop.number(),
      month: prop.number(),
      selectedDate: prop.object<Calendar, Date>( {
        attribute: {
          source: true
        },
        default: new Date(),
        deserialize( value: string ) {
          return parse( value );
        }
      } ),
      weekStartsOn: prop.string( {
        attribute: {
          source: true
        },
        default: WEEK_STARTS_ON
      } ),
      todayButtonText: prop.string()
    };
  }

  static get events() {
    return {
      DATE_CHANGE: 'dateChange'
    };
  }

  static range( count: number ): number[] {
    return Array.from( { length: count }, ( value: number, key: number ) => key );
  }

  selectedDate: Date;
  i18n: LocaleType = {
    todayButtonText: BUTTON_TODAY
  };
  weekStartsOn: string;

  private year: number;
  private month: number;
  private days: Date[] = [];
  private daysMatrix = Calendar.range( DAYS_IN_MATRIX );

  constructor() {
    super();
    this.prevYear = this.prevYear.bind( this );
    this.nextYear = this.nextYear.bind( this );
    this.prevMonth = this.prevMonth.bind( this );
    this.nextMonth = this.nextMonth.bind( this );
    this.setDate = this.setDate.bind( this );
  }

  updatedCallback( previousProps: Props ) {

    // Init component
    if ( previousProps === undefined ) {
      this.initSelectedDay();
      this.initDays();
    }
    return super.updatedCallback( previousProps );

  }

  prevYear() {
    this.year--;
    this.initDays();
  }

  nextYear() {
    this.year++;
    this.initDays();
  }

  prevMonth() {
    this.month--;
    if ( this.month < 0 ) {
      this.month = 11;
      this.year--;
    }
    this.initDays();
  }

  nextMonth() {
    this.month++;
    if ( this.month > 11 ) {
      this.month = 0;
      this.year++;
    }
    this.initDays();
  }

  setDate( toDate: Date ) {
    const date = parse( toDate );

    // reset hours, minutes and second to prevent set date from "new Date()"
    this.resetHoursMinutesSeconds( toDate );

    this.month = getMonth( date );
    this.year = getYear( date );
    this.initDays();

    props( this, {
      selectedDate: date
    } );

    emit( this, Calendar.events.DATE_CHANGE, {
      detail: {
        value: this.selectedDate
      }
    } );
  }

  renderCallback() {

    const { year, month, selectedDate } = this;

    // create date elements
    const days = this.days.map( ( day ) => {
      const className = css(
        'c-calendar__date',
        {
          'c-calendar__date--in-month': getMonth( day ) === month,
          'c-calendar__date--today': isToday( day ),
          'c-calendar__date--selected': isSameDay( day, selectedDate ),
        }
      );
      return <button class={className} onClick={this.setDateHandler( day )}>{getDate( day )}</button>;
    } );

    // create weekDays elements
    const weekDays = this.days.filter( ( day, index ) =>
    index < 7 ).map( ( day ) =>
      <div class="c-calendar__day">{this.format( day, 'dd' )}</div> );

    return [
      <style>{styles}</style>,
      <div class="c-calendar c-calendar--higher">
        <button class="c-calendar__control" onClick={this.prevYear}>‹</button>
        <div class="c-calendar__header">{year}</div>
        <button class="c-calendar__control" onClick={this.nextYear}>›</button>

        <button class="c-calendar__control" onClick={this.prevMonth}>‹</button>
        <div class="c-calendar__header">{this.format( new Date( year, month ), 'MMMM' )}</div>
        <button class="c-calendar__control" onClick={this.nextMonth}>›</button>

        {weekDays}
        {days}

        <CalendarButton onClick={this.setDateHandler()}>{this.i18n.todayButtonText}</CalendarButton>
      </div>
    ];
  }

  private setDateHandler = ( newDate = new Date() ) =>
    () => {
      this.setDate( newDate );
    }

  private format( date: Date, formatStr: string ) {
    const formatLocale = buildFormatLocale( this.i18n );
    const options = {
      locale: {
        format: formatLocale
      }
    };
    return format( date, formatStr, options );
  }

  private initSelectedDay() {
    this.year = getYear( this.selectedDate );
    this.month = getMonth( this.selectedDate );
  }

  private initDays() {
    const date = new Date( this.year, this.month );
    const firstDay = startOfWeek( date,
      {
        weekStartsOn: this.weekStartsOn === WEEK_STARTS_ON
          ? 0
          : 1
      } );

    const days: Date[] = this.daysMatrix.reduce( ( acc: Date[] ) => {
      const lastDate = acc[ acc.length - 1 ];
      const nextDate = addDays( lastDate, 1 );
      return [ ...acc, nextDate ];
    }, [ firstDay ] );

    this.days = [ ...days ];

  }

  private resetHoursMinutesSeconds( date: Date ) {
    date.setHours( 0 );
    date.setMinutes( 0 );
    date.setSeconds( 0 );
  };

}

