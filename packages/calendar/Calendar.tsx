import { h, Component, prop, emit } from 'skatejs';
import styles from './Calendar.scss';
import { parse, isEqual, isToday, format, startOfWeek, getDate, addDays, getMonth, getYear } from 'date-fns';
import { css } from '../_helpers/css';
import { Button } from '../button/Button';
import { buildFormatLocale, LocaleType } from '../_helpers/buildFormatLocale';

interface CalendarProps extends JSX.HTMLProps<HTMLElement | any> {
  selectedDate?: string,
  onDateChange?: Function,
  i18n?: {
    monthsFull: string[],
    weekdays2char: string[],
  },
  weekStartsOn?: number,
}

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
      weekStartsOn: prop.number({
        attribute: true
      })
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

  year: number;
  month: number;
  weekStartsOn = 0; // default is sunday
  rows = Calendar.range( 6 );
  cols = Calendar.range( 7 );
  days = [];
  selectedDate: Date;
  i18n: LocaleType;

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
    const days = [];
    let currentDate = startOfWeek( date, { weekStartsOn: this.weekStartsOn } );

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
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

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

  renderCallback() {

    const { year, month } = this;

    // create date elements
    const days = this.days.map( ( day ) => {
      const className = css(
        'c-calendar__date',
        {
          'c-calendar__date--in-month': getMonth( day ) === this.month,
          'c-calendar__date--today': isToday( day ),
          'c-calendar__date--selected': isEqual( day, this.selectedDate ),
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

        <Button onClick={this.setDateHandler()} block>Today</Button>
      </div>
    ];
  }

}

customElements.define( Calendar.is, Calendar );
