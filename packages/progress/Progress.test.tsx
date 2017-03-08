import { mount, h } from 'bore';
import * as expect from 'expect';
import { Progress } from './index';

describe( Progress.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Progress.is ) ).toBe( Progress );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-progress attrs={{ value: 100 }} />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Progress.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-progress attrs={{ value: 100 }} />
      ).wait(( element ) => {

        expect( element.has( '.c-progress' ) ).toBe( true );

      } );

    } );

  } );

  describe( `API`, () => {

    describe( `[value]`, () => {
      // TODO
    } );

    describe( `[color]`, () => {
      // TODO
    } );

    describe( `[display-size]`, () => {
      // TODO
    } );

    describe( `[rounded]`, () => {
      // TODO
    } );

  } );

} );
