import { h, Component, prop } from 'skatejs';
import { Range } from './Range';

export class Demo extends Component<void> {
  static get is() { return 'bl-range-demo'; }
  static get props() {
    return {
      val: prop.number()
    };
  }

  val: number;

  private reflectValue( event: Event ) {
    this.val = Number.parseInt((event.currentTarget as HTMLInputElement).value);
  }

  connectedCallback() {
    super.connectedCallback();
    this.reflectValue = this.reflectValue.bind(this);
  }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Range.is}</legend>

        <div>
          1 &mdash; 10
          <Range color="error"
                 value="5"
                 min="1"
                 max="10"
                 onKeyup={() => { console.log('onKeyUp'); }}
                 onFocus={() => { console.log('onFocus'); }}
                 onBlur={() => { console.log('onBlur'); }}
                 onChange={this.reflectValue}
          ></Range>
          Current value: {this.val}

          <br />

          0 &mdash; 100
          <Range color="warning"
                 value="25"
          ></Range>

          <br />

          0 &mdash; 100
          <Range color="success"
                 value="33"
          ></Range>

          <br />

          0 &mdash; 10
          <Range color="info"
                 max="10"
                 value="5"
          ></Range>

          <br />

          1 &mdash; 10
          <Range value="5"
                 min="1"
                 max="10"
                 disabled
          ></Range>
        </div>

      </fieldset>
    ];
  }
}

customElements.define( Demo.is, Demo );
