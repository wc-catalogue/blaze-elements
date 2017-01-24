import { h, Component, prop } from 'skatejs';
import { Progress } from './Progress';

export class Demo extends Component<void> {
  static get is() { return 'bl-progress-demo'; }
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
        <legend>{Progress.is}</legend>

        <div>
          <Progress value={5}
                    rounded
          ></Progress>
          <br />
          <Progress value={10}
                    color="brand"
                    displaySize="small"
          ></Progress>
          <br />
          <Progress value={40}
                    color="info"
                    displaySize="medium"
          ></Progress>
          <br />
          <Progress value={90}
                    color="warning"
                    displaySize="large"
          ></Progress>
          <br />
          <Progress value={99}
                    color="error"
                    displaySize="xlarge"
          ></Progress>
          <br />
          <Progress value={100}
                    color="success"
                    displaySize="super"
          >DONE</Progress>
        </div>

      </fieldset>
    ];
  }
}

customElements.define( Demo.is, Demo );
