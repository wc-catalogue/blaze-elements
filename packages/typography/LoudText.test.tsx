import { h, mount } from 'bore';
import * as expect from 'expect';
import { LoudText } from './index';

describe( LoudText.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( LoudText.is ) ).toBe( LoudText );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-loud-text />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( LoudText.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-loud-text />
      ).wait(( element ) => {

        expect( element.has( '.c-text--loud' ) ).toBe( true );

      } );

    } );
  } );
} );
