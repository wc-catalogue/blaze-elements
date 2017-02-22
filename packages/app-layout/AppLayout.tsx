import { h, Component, prop, props } from 'skatejs';

import { matchMedia } from '@blaze-elements/common';

import { Drawer } from './components/Drawer';
import { Overlay } from './components/Overlay';
import { Nav } from './components/Nav';
import { NavContent } from './components/NavContent';

import styles from './AppLayout.scss';

const DEFAULT_RESPONSIBLE_WIDTH = '640px';

export type AppLayoutProps = Props & EventProps;

export type Attrs = {
  'drawer-visible'?: boolean,
  'responsive-width'?: string,
  'force-narrow'?: boolean,
};

export type Props = {
  drawerVisible?: boolean,
  responsiveWidth?: string,
  narrow?: boolean,
  forceNarrow?: boolean
};

// TODO: add onDrawerChange / onNarrowChange
export type EventProps = {};

export type Events = {};

export default class AppLayout extends Component<AppLayoutProps> {

  static get props() {
    return {
      /**
       * Trigger drawer visibility
       */
      drawerVisible: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      /**
       * If the viewport's width is smaller than this value, the panel will change to narrow
       * layout. In the mode the drawer will be closed.
       */
      responsiveWidth: prop.string( {
        attribute: {
          source: true
        }
      } ),
      /**
       * If true, ignore `responsiveWidth` setting and force the narrow layout.
       */
      forceNarrow: prop.boolean( {
        attribute: {
          source: true
        }
      } ),
      narrow: prop.boolean(),
    };
  }

  drawerVisible: boolean;

  responsiveWidth: string = DEFAULT_RESPONSIBLE_WIDTH;

  forceNarrow = false;

  narrow: boolean;

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
            isFullpage
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
            {this.narrow && (
              <div class="hamburger-button" onClick={this.openDrawer}>☰</div>
            )}
            <div class="toolbar"><slot name="toolbar">{`Add <bl-nav slot="toolbar"></bl-nav>`}</slot></div>
          </div>
          <div class="content">
            <slot />
          </div>
        </div>
      </div>
    ];
  }

  private openDrawer = () => {

    props( this, { drawerVisible: true } );

  }

  private closeDrawer = () => {

    props( this, { drawerVisible: false } );

  }

  private matchMediaUnsubscribe = () => { };

  private setupQueryMatchListener() {

    // Unsubscribe previously subscribed listener
    this.matchMediaUnsubscribe();

    this.matchMediaUnsubscribe = matchMedia(
      this.forceNarrow ? '(min-width: 0px)' : `(max-width: ${this.responsiveWidth})`,
      ( matches ) => {

        props( this, {
          narrow: matches,
          drawerVisible: !matches
        } );

      }
    );

  }

}
