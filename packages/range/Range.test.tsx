import { mount, h } from 'bore';
import * as expect from 'expect';
import { Range } from './index';

describe( Range.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Range.is ) ).toBe( Range );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-range />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Range.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-range />
      ).wait(( element ) => {

        expect( element.has( '.c-range' ) ).toBe( true );

      } );

    } );
  } );

  describe( `API`, () => {

    describe( `[value]`, () => {
      // TODO
    } );

    describe( `[min]`, () => {
      // TODO
    } );

    describe( `[max]`, () => {
      // TODO
    } );

    describe( `[disabled]`, () => {
      // TODO
    } );

    describe( `[color]`, () => {
      // TODO
    } );

  } );

} );
