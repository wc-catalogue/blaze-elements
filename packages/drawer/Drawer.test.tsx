import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { Drawer } from './index';

describe( Drawer.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Drawer.is ) ).toBe( Drawer );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-drawer />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Drawer.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Drawer />
      ).wait(( element ) => {

        expect( element.has( '.o-drawer' ) ).toBe( true );

      } );

    } );

  } );

} );
