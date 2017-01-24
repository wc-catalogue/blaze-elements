import { mount, h } from 'bore';
import * as expect from 'expect';
import { AppLayout } from './index';

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
        <AppLayout />
      ).wait(( element ) => {

        expect( element.has( '.app-layout-container' ) ).toBe( true );

      } );

    } );
  } );

  // TODO: finish tests ;)
  describe( `API`, () => {

    describe( `[drawerVisible]`, () => {

      it( `should open drawer`, () => { } );

      it( `should close opened drawer`, () => { } );

    } );

    describe( `[responsiveWidth]`, () => {

      it( `should set narrow on screen smaller than responsiveWidth`, () => { } );

    } );

  } );

  describe( `Interactions with`, () => {

    describe( `Hamburger button`, () => {

      it( `should open drawer on click`, () => { } );

      it( `should close opened drawer on click`, () => { } );

    } );

  } );

} );
