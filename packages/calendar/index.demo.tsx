import { h, Component } from 'skatejs';
import { bind } from 'decko';
import { GenericEvents, customElement, prop } from '@blaze-elements/common';

import { Calendar } from './index';

@customElement( 'bl-calendar-demo' )
export class Demo extends Component<void> {

  @prop( {
    type: String
  } ) selectedDate = new Date( '1987-12-22' );

  i18n = {
    cs: {
      monthsFull: [
        'Leden',
        'Únor',
        'Březen',
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

  renderCallback() {
    return (
      <fieldset>
        <legend>{Calendar.is}</legend>
        <span>Selected date: {this.selectedDate}</span>
        <Calendar
          selectedDate={this.selectedDate}
          onDateChange={this.dateChangeHandler}
        />
        <h4>Internationalized calendar (Czech)</h4>
        <Calendar
          selectedDate={this.selectedDate}
          onDateChange={this.dateChangeHandler}
          i18n={this.i18n.cs}
          weekStartsOn={'monday'}
        />
      </fieldset>
    );
  }

  @bind
  private dateChangeHandler( event: GenericEvents.CustomChangeEvent<Date> ) {
    this.selectedDate = event.detail.value;
  }
}
