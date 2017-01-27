import { h, Component } from 'skatejs';
import { Input } from './Input';

export class Demo extends Component<void> {
  static get is() { return 'bl-input-demo'; }

  renderCallback() {
    return [
      <style />,
      <fieldset>
        <legend>{Input.is}</legend>

        <div>
          <Input
            valid="false"
            value="error state"
            placeholder="placeholder"
            onKeyup={this.log('onKeyUp')}
            onFocus={this.log('onFocus')}
            onBlur={this.log('onBlur')}
            onChange={this.log('onChange')}
          />
          <Input
            valid="true"
            value="success state"
            onChange={this.log('onChange')}
            inputSize="xlarge"
          />
          <Input
            value="default state"
            onChange={this.log('onChange')}
            inputSize="super"
          />
          <Input
            value="disabled state"
            disabled
            inputSize="xsmall"
          />
          <Input
            value="password"
            type="password"
          />
          <Input
            value=""
            type="number"
          />
        </div>

      </fieldset>
    ];
  }

  private log = (message: string): any => {
    console.log(message);
  }
}

customElements.define(Demo.is, Demo);
