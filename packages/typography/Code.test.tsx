import { h, mount } from 'bore';
import * as expect from 'expect';
import { Code } from './index';

describe( Code.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Code.is ) ).toBe( Code );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-code />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Code.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-code />
      ).wait(( element ) => {

        expect( element.has( '.c-code' ) ).toBe( true );

      } );

    } );
  } );
} );
