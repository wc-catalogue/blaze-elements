import { h, Component, props } from 'skatejs';

import { matchMedia, prop } from '@blaze-elements/common';

import AppLayoutDrawer from './components/Drawer';
import AppLayoutOverlay from './components/Overlay';
import AppLayoutNav from './components/Nav';
import AppLayoutNavContent from './components/NavContent';

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

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) drawerVisible?: boolean;


  /**
   * If the viewport's width is smaller than this value, the panel will change to narrow
   * layout. In the mode the drawer will be closed.
   */
  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) responsiveWidth?: string = DEFAULT_RESPONSIBLE_WIDTH;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) forceNarrow?: boolean = false;


  @prop( { type: Boolean } ) narrow?: boolean;

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
          <AppLayoutOverlay
            isDismissable
            onClick={this.closeDrawer}
            isFullpage
          />
        }
        <AppLayoutDrawer
          visible={this.drawerVisible}
          position="left"
          floating={this.narrow}
        >
          <AppLayoutNav>
            <AppLayoutNavContent>
              <div class="drawer-header-content"><slot name="drawer-toolbar" /></div>
            </AppLayoutNavContent>
          </AppLayoutNav>
          <slot name="drawer">{`Add <bl-nav slot="drawer"></bl-nav>`}</slot>
        </AppLayoutDrawer>
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
