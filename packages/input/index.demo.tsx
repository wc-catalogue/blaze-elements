import { h, Component, prop } from 'skatejs';
import { Input } from './index';

export class Demo extends Component<void> {
  static get is() { return 'bl-input-demo'; }

  static get props() {
    return {
      errorValue: prop.string()
    };
  }

  errorValue = 'error state';

  constructor() {
    super();

    this.propagateValue = this.propagateValue.bind( this );
  }

  propagateValue( event: CustomEvent ) {
    this.errorValue = event.detail.data;
  }

  renderCallback() {

    const { errorValue } = this;

    return [
      <fieldset>
        <legend>{Input.is}</legend>

        <div>
          <pre>value: {errorValue}</pre>
          <Input
            valid="false"
            value={errorValue}
            placeholder="placeholder"
            onChange={this.propagateValue}
          />
          <Input
            valid="true"
            value="success state"
            onChange={this.log( 'onChange' )}
            inputSize="xlarge"
          />
          <Input
            value="default state"
            onChange={this.log( 'onChange' )}
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

  private log = ( message: string ): any => {
    console.log( message );
  }
}

customElements.define( Demo.is, Demo );
