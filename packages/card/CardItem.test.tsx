import * as expect from 'expect';
import { h, mount, WrappedNode } from 'bore';
import { CardItem } from './index';

describe( CardItem.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( CardItem.is ) ).toBe( CardItem );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-card-item>Item</bl-card-item> ).wait(( element ) => {
        expect( element.node.localName ).toBe( CardItem.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <CardItem>Item</CardItem> ).wait(( element ) => {
        expect( element.has( '.c-card__item' ) ).toBe( true );
      } );
    } );

  } );

  describe( `API`, () => {

    describe( `[selected]`, () => {

      it( `should set selected flag`, () => {
        return mount(
          <bl-card-item selected>Item</bl-card-item>
        ).wait( checkSelected );
      } );

      it( `should set selected flag via attribute`, () => {
        return mount(
          <bl-card-item attrs={{ selected: true }}>Item</bl-card-item>
        ).wait( checkSelected );
      } );

      function checkSelected( element: WrappedNode ) {
        expect( element.has( '.c-card__item--active' ) ).toBe( true );
      }

    } );

  } );

} );
