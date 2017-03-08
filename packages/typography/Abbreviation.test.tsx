import { mount, h } from 'bore';
import * as expect from 'expect';
import { Abbreviation } from './index';

describe( Abbreviation.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Abbreviation.is ) ).toBe( Abbreviation );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-abbreviation />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Abbreviation.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-abbreviation />
      ).wait(( element ) => {

        expect( element.has( '.c-text--help' ) ).toBe( true );

      } );

    } );
  } );
} );
