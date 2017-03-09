import { mount, h } from 'bore';
import * as expect from 'expect';
import { Paragraph } from './index';

describe( Paragraph.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Paragraph.is ) ).toBe( Paragraph );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-paragraph />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Paragraph.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-paragraph />
      ).wait(( element ) => {

        expect( element.has( '.c-paragraph' ) ).toBe( true );

      } );

    } );
  } );
} );
