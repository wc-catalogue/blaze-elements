import { h, Component, emit, props } from 'skatejs';
import styles from './Calendar.scss';

import {
  css,
  buildFormatLocale,
  LocaleType,
  GenericEvents,
  prop
} from '@blaze-elements/common';

import Button from './components/Button';

import * as getYear from 'date-fns/get_year';
import * as getMonth from 'date-fns/get_month';
import * as addDays from 'date-fns/add_days';
import * as getDate from 'date-fns/get_date';
import * as startOfWeek from 'date-fns/start_of_week';
import * as format from 'date-fns/format';
import * as isToday from 'date-fns/is_today';
import * as parse from 'date-fns/parse';
import * as isSameDay from 'date-fns/is_same_day';

const BUTTON_TODAY = 'TODAY';
const WEEK_STARTS_ON = 'sunday';
const DAYS_IN_MATRIX = 41;

export type WeekStart = 'sunday' | 'monday';

export type CalendarProps = Props & EventProps;

export type Attrs = {
  'selected-date'?: string,
  'week-starts-on'?: WeekStart,
};

export type Props = {
  selectedDate?: Date,
  i18n?: {
    monthsFull: string[],
    weekdays2char: string[],
    todayButtonText: string,
  },
  weekStartsOn?: WeekStart,
};

export type EventProps = {
  onDateChange?: GenericEvents.CustomChangeHandler<Date>,
};

export type Events = {
  dateChange?: GenericEvents.CustomChangeHandler<Date>,
};

export default class Calendar extends Component<CalendarProps> {

  static get events() {
    return {
      DATE_CHANGE: 'dateChange'
    };
  }

  static range( count: number ): number[] {
    return Array.from( { length: count }, ( value: number, key: number ) => key );
  }


  @prop( {
    type: Number
  } ) year: number;

  @prop( {
    type: Number
  } ) month: number;

  @prop( {
    type: Date,
    attribute: {
      source: true
    },
    deserialize( value: string ) {
      return parse( value );
    }
  } ) selectedDate = new Date();

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) weekStartsOn = WEEK_STARTS_ON;

  @prop( {
    type: String
  } ) todayButtonText = BUTTON_TODAY;

  @prop( {
    type: Object
  } ) i18n: LocaleType = { todayButtonText: this.todayButtonText };

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
    const days = this.days.map(( day ) => {
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
    const weekDays = this.days.filter(( day, index ) =>
      index < 7 ).map(( day ) =>
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

        <Button onClick={this.setDateHandler()}>{this.i18n.todayButtonText}</Button>
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

    const days: Date[] = this.daysMatrix.reduce(( acc: Date[] ) => {
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

