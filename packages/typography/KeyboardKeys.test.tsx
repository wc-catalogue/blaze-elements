import { h, mount } from 'bore';
import * as expect from 'expect';
import { KeyboardKeys } from './index';

describe( KeyboardKeys.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( KeyboardKeys.is ) ).toBe( KeyboardKeys );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-keyboard-keys />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( KeyboardKeys.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-keyboard-keys />
      ).wait(( element ) => {

        expect( element.has( '.c-kbd' ) ).toBe( true );

      } );

    } );
  } );
} );
