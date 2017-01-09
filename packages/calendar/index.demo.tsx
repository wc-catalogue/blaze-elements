import { h, Component, prop } from 'skatejs';
import { Calendar } from './Calendar';

export class Demo extends Component<void> {
  static get is() { return 'bl-calendar-demo' }
  static get props() {
    return {
      selectedDate: prop.string()
    }
  }

  constructor() {
    super();

    this.dateChangeHandler = this.dateChangeHandler.bind(this);
  }

  private dateChangeHandler( event: CustomEvent ){
    this.selectedDate = event.detail.date;
  }

  selectedDate = new Date('1987-12-22').toDateString();

  renderCallback() {
    console.log( 'renderCB' );
    return [
      <style></style>,
      <fieldset>
        <legend>{Calendar.is}</legend>
        <span>Selected date: {this.selectedDate}</span>
        <Calendar selectedDate={this.selectedDate} onDateChange={this.dateChangeHandler}></Calendar>
      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
