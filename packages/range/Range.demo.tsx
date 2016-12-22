import { h, Component, prop } from 'skatejs';
import { Range } from './Range';

export class Demo extends Component<void> {
  static get is() { return 'bl-range-demo' }
  static get props() {
    return {
      val: prop.number()
    }
  }

  val: number;

  private reflectValue( event: Event ) {
    this.val = Number.parseInt((event.currentTarget as HTMLInputElement).value);
  }

  connectedCallback(){
    super.connectedCallback();
    this.reflectValue = this.reflectValue.bind(this);
  }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Range.is}</legend>

        <div>
          <Range valid="false"
                 value="5"
                 min="1"
                 max="10"
                 onKeyup={() => { console.log("onKeyUp")}}
                 onFocus={() => { console.log("onFocus")}}
                 onBlur={() => { console.log("onBlur")}}
                 onChange={this.reflectValue}
          ></Range>
          Current value: {this.val}

          <Range valid="true"
                 value="25"
          ></Range>
          <Range value="5"
                 min="1"
                 max="10"
                 disabled
          ></Range>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
