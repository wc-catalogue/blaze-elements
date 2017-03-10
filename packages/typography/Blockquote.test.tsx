import { h, mount } from 'bore';
import * as expect from 'expect';
import { Blockquote } from './index';

describe( Blockquote.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Blockquote.is ) ).toBe( Blockquote );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-blockquote />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Blockquote.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-blockquote />
      ).wait(( element ) => {

        expect( element.has( '.c-blockquote' ) ).toBe( true );

      } );

    } );
  } );
} );
