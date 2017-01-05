import { h, Component } from 'skatejs';
import { Input } from './Input';

export class Demo extends Component<void> {
  static get is() { return 'bl-input-demo' }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Input.is}</legend>

        <div>
          <Input valid="false" value="error state"
                placeholder="placeholder"
                onKeyup={() => { console.log("onKeyUp")}}
                onFocus={() => { console.log("onFocus")}}
                onBlur={() => { console.log("onBlur")}}
                onChange={() => { console.log("onChange")}}
                onInput={() => { console.log("onInput")}}
          ></Input>
          <Input valid="true" value="success state"
                onChange={() => { console.log("onChange")}}
                inputSize="xlarge"
          ></Input>
          <Input value="default state"
                onChange={() => { console.log("onChange")}}
                inputSize="super"
          ></Input>
          <Input value="disabled state"
                disabled
                inputSize="xsmall"
          ></Input>
          <Input value="password"
                type="password"
          ></Input>
          <Input value=""
                type="number"
          ></Input>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
