import{ h, Component } from 'skatejs';
import { Nav } from './Nav';
import { NavItem } from './Nav-item'

export class Demo extends Component<void> {
  static get is() { return 'bl-nav-demo'}

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Nav.is}</legend>
        <h3>Vertical</h3>
        <div style="width:200px">
          <Nav>
            <NavItem type="content">MY APP</NavItem>
            <NavItem type="success" active>Create New</NavItem>
            <NavItem>Home</NavItem>
            <NavItem type="brand">About</NavItem>
            <NavItem type="info">News</NavItem>
            <NavItem type="error">Help</NavItem>
          </Nav>
        </div>

        <h3>Horizontal</h3>
        <div>
          <Nav inline>
            <NavItem>Home</NavItem>
            <NavItem>News</NavItem>
            <NavItem right>Contact</NavItem>
          </Nav>
        </div>
      </fieldset>
    ]
  }
}


customElements.define( Demo.is, Demo );
