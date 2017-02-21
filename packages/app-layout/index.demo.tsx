import { Component, h, define } from 'skatejs';

import { AppLayout } from './index';
import { Nav, NavItem, NavContent } from '../nav/index';

import neverGonnaGiveYouUp from '../../assets/never-gonna-give-you-up.gif';

export class Demo extends Component<void> {
  static get is() { return 'bl-app-layout-demo'; }

  renderCallback() {
    return (
      <AppLayout responsiveWidth="1270px">

        <span slot="drawer-toolbar">LOGO</span>

        <Nav slot="drawer">
          <NavItem>Never</NavItem>
          <NavItem>Gonna</NavItem>
          <NavItem>Give</NavItem>
          <NavItem>You</NavItem>
          <NavItem>Up</NavItem>
          <NavItem>Never</NavItem>
          <NavItem>Gonna</NavItem>
          <NavItem>Let</NavItem>
          <NavItem>You</NavItem>
          <NavItem>Down</NavItem>
        </Nav>

        <Nav slot="toolbar" inline>
          <NavContent>Bread / Crumbs / Whatever</NavContent>
          <NavItem right>Logout</NavItem>
        </Nav>

        <div>
          <h1>Content</h1>
          <img style={{ width: '100%' } as any} src={neverGonnaGiveYouUp} />
        </div>

      </AppLayout>
    );
  }
}

define( Demo );
