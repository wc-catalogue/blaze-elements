import { h, mount } from 'bore';
import * as expect from 'expect';
import { QuietText } from './index';

describe( QuietText.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( QuietText.is ) ).toBe( QuietText );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-quiet-text />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( QuietText.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-quiet-text />
      ).wait(( element ) => {

        expect( element.has( '.c-text--quiet' ) ).toBe( true );

      } );

    } );
  } );
} );
