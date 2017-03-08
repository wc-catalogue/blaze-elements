import { mount, h } from 'bore';
import * as expect from 'expect';
import { MonospaceText } from './index';

describe( MonospaceText.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( MonospaceText.is ) ).toBe( MonospaceText );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-monospace-text />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( MonospaceText.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-monospace-text />
      ).wait(( element ) => {

        expect( element.has( '.c-text--mono' ) ).toBe( true );

      } );

    } );
  } );
} );
