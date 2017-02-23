import { h, Component } from 'skatejs';
import { customElement } from '../_helpers';
import { Select, Option } from './index';
import { prop } from '../_helpers/decorators';
import { bind } from 'decko';

export type DemoProps = { logger: string[], wat?: string, };

@customElement( 'bl-select-demo' )
export class Demo extends Component<DemoProps> {

  @prop( { type: String } ) value = 'en';
  @prop( { type: String } ) value2: string;

  @bind
  setSelected( e: MouseEvent ) {
    const target = e.target as any;
    this.value = target.value;
  }

  @bind
  setSelected2( e: MouseEvent ) {
    const target = e.target as any;
    this.value2 = target.value;
  }

  renderCallback() {
    return [
      <h2>DEMO:</h2>,
      <fieldset>
        <legend>{Select.is} &amp; {Option.is}</legend>
        <h4>With selected value</h4>
        <bl-select value={this.value} placeholder="Select Language">
          <bl-option value="cs" onClick={this.setSelected}>Česky</bl-option>
          <bl-option value="en" onClick={this.setSelected}>English</bl-option>
          <bl-option value="ru" onClick={this.setSelected}>Pусский</bl-option>
        </bl-select>

        <h4>Without selected value</h4>
        <bl-select value={this.value2} placeholder="Select Language">
          <bl-option value="cs" onClick={this.setSelected2}>Česky</bl-option>
          <bl-option value="en" onClick={this.setSelected2}>English</bl-option>
          <bl-option value="ru" onClick={this.setSelected2}>Pусский</bl-option>
        </bl-select>
      </fieldset>,

    ];
  }

}
