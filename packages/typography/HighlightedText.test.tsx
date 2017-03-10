import { h, mount } from 'bore';
import * as expect from 'expect';
import { HighlightedText } from './index';

describe( HighlightedText.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( HighlightedText.is ) ).toBe( HighlightedText );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-highlighted-text />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( HighlightedText.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-highlighted-text />
      ).wait(( element ) => {

        expect( element.has( '.c-text--highlight' ) ).toBe( true );

      } );

    } );
  } );
} );
