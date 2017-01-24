import{ h, Component } from 'skatejs';
import { Nav } from './Nav';
import { NavItem } from './Nav-item';
import { NavContent } from './Nav-content';

export class Demo extends Component<void> {
  static get is() { return 'bl-nav-demo'; }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Nav.is}</legend>
        <h3>Vertical</h3>
        <div style={ { width: '200px' } as CSSStyleDeclaration }>
          <Nav>
            <NavItem color="success" active>Create New</NavItem>
            <NavItem>Home</NavItem>
            <NavItem color="brand">About</NavItem>
            <NavItem color="info">News</NavItem>
            <NavItem color="error">Help</NavItem>
            <NavItem color="warning">Warning</NavItem>
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

        <h3>Horizontal with shadow</h3>
        <div>
          <Nav inline shadow>
            <NavItem>Home</NavItem>
            <NavItem>News</NavItem>
            <NavItem right>Contact</NavItem>
          </Nav>
        </div>

        <h3>Horizontal with images in menu</h3>
        <div>
          <Nav inline>
            <NavContent>
              <img
                class="o-image"
                src="https://www.fillmurray.com/200/300"
                style={{height: '100%' } as CSSStyleDeclaration}
              />
            </NavContent>
            <NavItem>News</NavItem>
            <NavItem right>Contact</NavItem>
          </Nav>
        </div>

        <div style={{position: 'relative'} as CSSStyleDeclaration}>
          <h3>Horizontal with shadow and bottom position</h3>
          <h5>Possible positions are:</h5>
          <ul>
            <li>top</li>
            <li>bottom</li>
            <li>left</li>
            <li>right</li>
            <li>fixed</li>
          </ul>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <div>
            <Nav inline shadow position="bottom">
              <NavItem>Home</NavItem>
              <NavItem>News</NavItem>
              <NavItem right>Contact</NavItem>
            </Nav>
          </div>
        </div>
      </fieldset>
    ];
  }
}


customElements.define( Demo.is, Demo );
