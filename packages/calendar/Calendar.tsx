import { h, Component, prop, emit } from 'skatejs';
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
import { css } from '../_helpers/css';
import { Button } from '../button/Button';
import { buildFormatLocale, LocaleType } from '../_helpers/buildFormatLocale';

const BUTTON_TODAY = 'TODAY';
const WEEK_STARTS_ON = 'sunday';

export type CalendarChangeEvent = CustomEvent & {detail: { date: Date } };

type CalendarProps = Props & EventProps;
type Props = {
  selectedDate?: Date,
  i18n?: {
    monthsFull: string[],
    weekdays2char: string[],
    todayButtonText: string,
  },
  weekStartsOn?: 'sunday' | 'monday',
};
type EventProps = {
  onDateChange?: ( ev: CalendarChangeEvent ) => void,
};

export class Calendar extends Component<CalendarProps> {

  constructor() {
    super();

    this.prevYear = this.prevYear.bind( this );
    this.nextYear = this.nextYear.bind( this );
    this.prevMonth = this.prevMonth.bind( this );
    this.nextMonth = this.nextMonth.bind( this );
    this.setDate = this.setDate.bind( this );
  }

  static get is() { return 'bl-calendar'; }

  static get props() {
    return {
      days: prop.array(),
      month: prop.number(),
      year: prop.number(),
      selectedDate: prop.string( {
        attribute: true
      } ),
      weekStartsOn: prop.string({
        attribute: true
      }),
      todayButtonText: prop.string()
    };
  }

  static get events() {
    return {
      DATE_CHANGE: 'dateChange'
    };
  }

  static range( n: Number ) {
    return Array.from( Array( n ).keys() );
  }

  private year: number;
  private month: number;
  private days: Date[] = [];
  private rows = Calendar.range( 6 );
  private cols = Calendar.range( 7 );

  weekStartsOn = WEEK_STARTS_ON; // default is sunday
  selectedDate: Date;
  i18n: LocaleType = {
    todayButtonText: BUTTON_TODAY
  };

  attributeChangedCallback() {
    this.initSelectedDay();
    this.initDays();
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
    this.selectedDate = parse( this.selectedDate );
    this.year = getYear( this.selectedDate );
    this.month = getMonth( this.selectedDate );
  }

  private initDays() {
    const date = new Date( this.year, this.month );
    const days: Date[] = [];
    let currentDate = startOfWeek( date, { weekStartsOn: this.weekStartsOn === WEEK_STARTS_ON ? 0 : 1 } );

    this.rows.forEach( () => {
      this.cols.forEach( () => {
        days.push( currentDate );
        currentDate = addDays( currentDate, 1 );
      } );
    } );

    this.days = [ ...Array().concat( days ) ];

  }

  private setDateHandler = (newDate = new Date()) => {
    return () => {
      this.setDate(newDate);
    };
  };

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

    this.selectedDate = date;
    this.month = getMonth( date );
    this.year = getYear( date );
    this.initDays();

    emit(this, Calendar.events.DATE_CHANGE, {
      detail: {
        date: this.selectedDate
      }
    });
  }

  private resetHoursMinutesSeconds( date: Date ) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
  };

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
      return <button className={className} onClick={this.setDateHandler(day)}>{getDate( day )}</button>;
    } );

    // create weekDays elements
    const weekDays = this.days.filter( ( day, index ) => {
      return index < 7;
    } ).map( ( day ) => {
      return <div class="c-calendar__day">{this.format( day, 'dd' )}</div>;
    } );

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

        <Button onClick={this.setDateHandler()} block>{this.i18n.todayButtonText}</Button>
      </div>
    ];
  }

}

customElements.define( Calendar.is, Calendar );
