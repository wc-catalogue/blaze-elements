import { mount, h } from 'bore';
import { emit } from 'skatejs';
import * as expect from 'expect';
import { AppLayout } from './index';
import RawAppLayout from './AppLayout';
import { Drawer } from './components/Drawer';

describe( AppLayout.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( AppLayout.is ) ).toBe( AppLayout );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-app-layout />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( AppLayout.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-app-layout />
      ).wait(( element ) => {

        expect( element.has( '.app-layout-container' ) ).toBe( true );

      } );

    } );
  } );


  describe( `API`, () => {

    describe( `[drawerVisible]`, () => {

      it( `should set Drawer [visibile] to true`, ( done ) => {

        mount(
          <bl-app-layout />
        ).wait(( wrapper ) => {

          const appLayout = wrapper.node as RawAppLayout;

          expect( appLayout.drawerVisible ).toBe( false );
          expect(( wrapper.one( 'bl-app-layout-drawer' ).node as Drawer ).visible ).toBe( false );

          appLayout.drawerVisible = true;

          setTimeout(() => {

            expect( appLayout.drawerVisible ).toBe( true );
            expect(( wrapper.one( 'bl-app-layout-drawer' ).node as Drawer ).visible ).toBe( true );

            done();

          } );

        } );

      } );

      it( `should set Drawer [visibile] to false`, ( done ) => {

        mount(
          <bl-app-layout
            attrs={{ 'responsive-width': '400px' }}
          />
        ).wait(( wrapper ) => {

          const appLayout = wrapper.node as RawAppLayout;

          expect( appLayout.drawerVisible ).toBe( true );
          expect(( wrapper.one( 'bl-app-layout-drawer' ).node as Drawer ).visible ).toBe( true );

          appLayout.drawerVisible = false;

          setTimeout(() => {

            expect( appLayout.drawerVisible ).toBe( false );
            expect(( wrapper.one( 'bl-app-layout-drawer' ).node as Drawer ).visible ).toBe( false );

            done();

          } );

        } );

      } );

    } );

    describe( `[responsiveWidth]`, () => {

      it( `should set narrow on screen smaller than responsiveWidth`, () => {

        mount(
          <bl-app-layout
            attrs={{ 'responsive-width': '2400px' }}
          />
        ).wait(( wrapper ) => {

          expect(( wrapper.node as RawAppLayout ).drawerVisible ).toBe( false );

        } );

      } );

      it( `should unset narrow on screen bigger than responsiveWidth`, () => {

        mount(
          <bl-app-layout
            attrs={{ 'responsive-width': '400px' }}
          />
        ).wait(( wrapper ) => {

          expect(( wrapper.node as RawAppLayout ).drawerVisible ).toBe( true );

        } );

      } );

    } );

    describe( `[forceNarrow]`, () => {

      it( `should set narrow and show drawer on screen bigger than responsiveWidth`, ( done ) => {

        mount(
          <bl-app-layout
            attrs={{
              'force-narrow': true,
              'responsive-width': '400px'
            }}
          />
        ).wait(( wrapper ) => {

          setTimeout(() => {

            expect(( wrapper.node as RawAppLayout ).narrow ).toBe( true );
            expect(( wrapper.node as RawAppLayout ).drawerVisible ).toBe( false );

            done();

          } );

        } );

      } );

    } );

  } );

  describe( `Interactions with`, () => {

    describe( `Hamburger button`, () => {

      it( `should open drawer on click`, ( done ) => {

        mount(
          <bl-app-layout
            attrs={{ 'responsive-width': '6000px' }}
          />
        ).wait(( wrapper ) => {

          const appLayout = wrapper.node as RawAppLayout;

          expect( appLayout.drawerVisible ).toBe( false );

          emit( wrapper.one( '.hamburger-button' ).node, 'click' );

          setTimeout(() => {

            expect( appLayout.drawerVisible ).toBe( true );

            done();

          } );


        } );

      } );

      it( `should close opened drawer on Overlay click`, ( done ) => {

        mount(
          <bl-app-layout
            attrs={{
              'responsive-width': '6000px'
            }}
          />
        ).wait(( wrapper ) => {

          const appLayout = wrapper.node as RawAppLayout;

          appLayout.drawerVisible = true;

          setTimeout(() => {

            expect( appLayout.drawerVisible ).toBe( true );

            emit( wrapper.one( 'bl-app-layout-overlay' ).node, 'click' );

            setTimeout(() => {

              expect( appLayout.drawerVisible ).toBe( false );

              done();

            } );

          } );


        } );

      } );

    } );

  } );

} );
