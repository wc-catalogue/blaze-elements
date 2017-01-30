import { h, Component, prop } from 'skatejs';
import { Calendar, CalendarChangeEvent } from './Calendar';



export class Demo extends Component<void> {
  static get is() { return 'bl-calendar-demo'; }

  static get props() {
    return {
      selectedDate: prop.string()
    };
  }

  selectedDate = new Date( '1987-12-22' );
  i18n = {
    cs: {
      monthsFull: [
        'Leden',
        'Únor',
        'Březěn',
        'Duben',
        'Květen',
        'Červen',
        'Červenec',
        'Srpen',
        'Září',
        'Říjen',
        'Listopad',
        'Prosinec'
      ],
      todayButtonText: 'DNES',
      weekdays2char: [ 'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So' ]
    }
  };

  constructor() {
    super();
    this.dateChangeHandler = this.dateChangeHandler.bind( this );
  }

  renderCallback() {
    return [
      <style />,
      <fieldset>
        <legend>{Calendar.is}</legend>
        <span>Selected date: {this.selectedDate}</span>
        <Calendar selectedDate={this.selectedDate} onDateChange={this.dateChangeHandler} />
        <h4>Internationalized calendar (Czech)</h4>
        <Calendar
          selectedDate={this.selectedDate}
          onDateChange={this.dateChangeHandler}
          i18n={this.i18n.cs}
          weekStartsOn={'monday'}
        />
      </fieldset>
    ];
  }
  private dateChangeHandler( event: CalendarChangeEvent ) {
    this.selectedDate = event.detail.date;
  }
}

customElements.define( Demo.is, Demo );
