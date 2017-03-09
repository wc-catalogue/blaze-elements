import { h, Component, props } from 'skatejs';
import { prop, customElement } from '@blaze-elements/common';
import { Range } from './index';

export type RangeDemoProps = {
  val?: number
};

@customElement( 'bl-range-demo' )
export class Demo extends Component<RangeDemoProps> {

  @prop( {
    type: Number,
  } )
  val: number;

  connectedCallback() {
    super.connectedCallback();
    this.reflectValue = this.reflectValue.bind( this );
  }

  renderCallback() {
    return (
      <fieldset>
        <legend>{Range.is}</legend>

        <div>
          1 &mdash; 10
          <Range
            color="error"
            value="5"
            min="1"
            max="10"
            onKeyup={this.log( 'onKeyUp' )}
            onFocus={this.log( 'onFocus' )}
            onBlur={this.log( 'onBlur' )}
            onChange={this.reflectValue}
          />
          Current value: {this.val}

          <br />

          0 &mdash; 100
          <Range
            color="warning"
            value="25"
          />

          <br />

          0 &mdash; 100
          <Range
            color="success"
            value="33"
          />

          <br />

          0 &mdash; 10
          <Range
            color="info"
            max="10"
            value="5"
          />

          <br />

          1 &mdash; 10
          <Range
            value="5"
            min="1"
            max="10"
            disabled
          />
        </div>

      </fieldset>
    );
  }

  private log = ( message: string ): any => {
    console.log( message );
  }

  private reflectValue( event: Event ) {
    props( this, {
      val: Number.parseInt(( event.currentTarget as HTMLInputElement ).value )
    } );
  }
}
