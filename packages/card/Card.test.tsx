import * as expect from 'expect';
import { h, mount } from 'bore';
import { Card } from './index';

describe( Card.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( Card.is ) ).toBe( Card );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-card>Content</bl-card> ).wait(( element ) => {
        expect( element.node.localName ).toBe( Card.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <Card>Content</Card> ).wait(( element ) => {
        expect( element.has( '.c-card' ) ).toBe( true );
      } );
    } );
  } );

} );
