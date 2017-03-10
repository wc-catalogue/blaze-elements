import { h, mount } from 'bore';
import * as expect from 'expect';
import { Accordion } from './index';

describe( Accordion.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Accordion.is ) ).toBe( Accordion );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-accordion />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Accordion.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-accordion />
      ).wait(( element ) => {

        expect( element.has( '.c-card--accordion' ) ).toBe( true );

      } );

    } );

  } );

} );
