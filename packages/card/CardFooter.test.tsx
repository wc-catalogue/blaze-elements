import { h, mount } from 'bore';
import * as expect from 'expect';
import { CardFooter } from './index';

describe( CardFooter.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( CardFooter.is ) ).toBe( CardFooter );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-card-footer>Footer</bl-card-footer> ).wait(( element ) => {
        expect( element.node.localName ).toBe( CardFooter.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <CardFooter>Footer</CardFooter> ).wait(( element ) => {
        expect( element.has( '.c-card__footer' ) ).toBe( true );
      } );
    } );
  } );

} );
