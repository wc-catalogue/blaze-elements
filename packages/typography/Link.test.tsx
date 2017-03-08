import { mount, h } from 'bore';
import * as expect from 'expect';
import { Link } from './index';

describe( Link.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Link.is ) ).toBe( Link );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-link />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Link.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-link />
      ).wait(( element ) => {

        expect( element.has( '.c-link' ) ).toBe( true );

      } );

    } );
  } );

  describe( `API`, () => {

    describe( `[href]`, () => {
      // TODO
    } );
    describe( `[download]`, () => {
      // TODO
    } );
    describe( `[hreflang]`, () => {
      // TODO
    } );
    describe( `[rel]`, () => {
      // TODO
    } );
    describe( `[target]`, () => {
      // TODO
    } );
    describe( `[type]`, () => {
      // TODO
    } );
    describe( `[color]`, () => {
      // TODO
    } );

  } );

} );
