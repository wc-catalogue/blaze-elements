import { h, Component, prop } from 'skatejs';

import {
  GenericTypes,
  matchMedia
} from '../_helpers';

import { HamburgerButton } from './components/HamburgerButton';
import { Drawer } from './components/Drawer';
import { Overlay } from './components/Overlay';
import { Nav } from './components/Nav';
import { NavContent } from './components/NavContent';

import styles from './AppLayout.scss';

const DEFAULT_RESPONSIBLE_WIDTH = '640px';

type AppLayoutProps = Props & EventProps;

type Attrs = {
  'drawer-visible'?: boolean,
  'responsive-width'?: string
};

type Props = {
  drawerVisible?: boolean,
  responsiveWidth?: string
};

// TODO: add onDrawerChange / onNarrowChange
type EventProps = {};

type Events = {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-app-layout': GenericTypes.IntrinsicCustomElement<AppLayoutProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}

export class AppLayout extends Component<AppLayoutProps> {

  static get is() { return 'bl-app-layout'; }

  static get props() {
    return {
      drawerVisible: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      responsiveWidth: prop.string( {
        initial: DEFAULT_RESPONSIBLE_WIDTH,
        attribute: {
          source: true
        }
      } ),
      narrow: prop.boolean( {
        attribute: {
          source: true,
        }
      } )
    };
  }

  drawerVisible: boolean;

  narrow: boolean;

  responsiveWidth: string;

  connectedCallback() {

    super.connectedCallback();

    this.setupQueryMatchListener();

  }

  disconnectedCallback() {

    super.disconnectedCallback();

    this.matchMediaUnsubscribe();

  }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <div class="app-layout-container">
        {( this.drawerVisible && this.narrow ) &&
          <Overlay
            isDismissable
            onClick={this.closeDrawer}
          />
        }
        <Drawer
          visible={this.drawerVisible}
          position="left"
          floating={this.narrow}
        >
          <Nav>
            <NavContent>
              <div class="drawer-header-content"><slot name="drawer-toolbar" /></div>
            </NavContent>
          </Nav>
          <slot name="drawer">{`Add <bl-nav slot="drawer"></bl-nav>`}</slot>
        </Drawer>
        <div class="header-layout-container">
          <div class="header">
            {this.narrow && ( <div class="hamburger-button">
              <HamburgerButton onClick={this.openDrawer} slot="hamburger-button" />
            </div> )}
            <div class="toolbar"><slot name="toolbar">{`Add <bl-nav slot="toolbar"></bl-nav>`}</slot></div>
          </div>
          <div class="content">
            <slot />
          </div>
        </div>
      </div>
    ];
  }

  private openDrawer = () => { this.drawerVisible = true; };

  private closeDrawer = () => { this.drawerVisible = false; };

  private matchMediaUnsubscribe = () => { };

  private setupQueryMatchListener() {

    // Unsubscribe previously subscribed listener
    this.matchMediaUnsubscribe();

    this.matchMediaUnsubscribe = matchMedia(
      `(min-width: ${this.responsiveWidth})`,
      ( matches ) => {

        if ( matches ) {

          this.openDrawer();
          this.narrow = false;

        } else {

          this.closeDrawer();
          this.narrow = true;

        }

      }
    );

  }

}
