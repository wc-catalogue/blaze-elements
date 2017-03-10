import { h, mount } from 'bore';
import * as expect from 'expect';
import { CardContent } from './index';

describe( CardContent.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( CardContent.is ) ).toBe( CardContent );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-card-content>Content</bl-card-content> ).wait(( element ) => {
        expect( element.node.localName ).toBe( CardContent.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <CardContent>Content</CardContent> ).wait(( element ) => {
        expect( element.has( '.c-card__body' ) ).toBe( true );
      } );
    } );
  } );

} );
