import { h, Component, prop, props, ComponentProps } from 'skatejs';
import { Css, customElement, renderCss } from '../_helpers';
import { Button } from './index';

export type DemoProps = { logger: string[] };

@customElement( 'bl-button-demo' )
export class Demo extends Css( Component )<DemoProps> {

  static get props(): ComponentProps<Demo, DemoProps> {
    return {
      logger: prop.array<Demo, string>()
    };
  }

  get css(){
    return `
    :host {
      display: block;
      padding: 1rem;
      box-shadow: 0 1px 10px #ccc;
    }
     h2 {
       color: tomato;
       font-size: 2rem;
     }
    `;
  }

  private logger: string[];

  @renderCss()
  renderCallback() {
    const { logger } = this;
    return [
      <h2 class="div">bl-button DEMO:</h2>,
      <fieldset>
        <legend>{Button.is}</legend>

        <bl-button color="brand" onClick={this.addLogEntry( 'Clicked! bl-button' )}>Click me</bl-button>

        <Button
          disabled
          color="brand"
          onClick={this.addLogEntry( 'Im Disabled!' )}
        >
          Click me
        </Button>
        <Button
          color="brand"
          onClick={this.addLogEntry( 'Clicked Button!' )}
        >
          Click me
        </Button>
        <Button
          ghost
          color="warning"
          onClick={this.addLogEntry( 'Clicked Button ghost!' )}
        >
          Click me
        </Button>
      </fieldset>,
      <div>
        <h4>Logs:</h4>
        <ul>
          {
            logger.map(( log ) => ( <li>{log}</li> ) )
          }
        </ul>
      </div>
    ];
  }

  private addLogEntry( entry: string ) {
    return ( ev: MouseEvent ) => {
      props( this, { logger: [ ...this.logger, `${entry} - ${this.logger.length}` ] });
    };
  }
}
