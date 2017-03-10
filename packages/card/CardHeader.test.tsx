import { h, mount } from 'bore';
import * as expect from 'expect';
import { CardHeader } from './index';

describe( CardHeader.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( CardHeader.is ) ).toBe( CardHeader );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-card-header>Header</bl-card-header> ).wait(( element ) => {
        expect( element.node.localName ).toBe( CardHeader.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <CardHeader>Header</CardHeader> ).wait(( element ) => {
        expect( element.has( '.c-card__header' ) ).toBe( true );
      } );
    } );
  } );

} );
