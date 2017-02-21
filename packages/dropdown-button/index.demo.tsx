import { h, Component, prop, ComponentProps } from 'skatejs';
import { DropdownButton } from './index';
import { NavItem } from '../nav/Nav-item';
import { Nav } from '../nav/Nav';

export type DemoProps = { title: string };

const LANGS: any = {
  cs: 'Česky',
  en: 'English',
  ru: 'Pусский',
};

export class Demo extends Component<DemoProps> {
  static get is() { return 'bl-dropdown-button-demo'; }

  static get props(): ComponentProps<Demo, DemoProps> {
    return {
      title: prop.string(),
    };
  }

  selectedKey = 'en';
  title = 'English';

  constructor() {
    super();
    this.handleClick = this.handleClick.bind( this );
  }

  renderCallback() {

    return [
      <style />,
      <fieldset>
        <legend>{DropdownButton.is}</legend>

        <bl-dropdown-button title={this.title}>
          <Nav>
            {this.renderLangs()}
          </Nav>
        </bl-dropdown-button>

      </fieldset>
    ];
  }

  handleClick( event: MouseEvent ) {
    console.log( 'Dropdown clicked', event );
    this.title = 'Česky';
    this.selectedKey = 'cs';
  }

  renderLangs() {
    return Object.keys( LANGS ).map(( ( key: string ) => {
      const langName: string = LANGS[ key ];
      return <NavItem active={this.selectedKey === key} onClick={this.handleClick}>{langName}</NavItem>;
    } ) );
  }

}

customElements.define( Demo.is, Demo );

