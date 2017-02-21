import * as expect from 'expect';
import { h, mount } from 'bore';
import { DropdownButton } from './index';

describe( DropdownButton.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( DropdownButton.is ) ).toBe( DropdownButton );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-dropdown-button /> ).wait(( element ) => {
        expect( element.node.localName ).toBe( DropdownButton.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <DropdownButton /> ).wait(( element ) => {
        expect( element.has( '.c-button' ) ).toBe( true );
      } );
    } );
  } );

  // describe( `API`, () => {
  //
  //   describe( `[color]`, () => {
  //
  //     it( `should render no color class on button by default`, () => {
  //       return mount( <bl-button attrs={{ color: 'brand' }}>huhuh</bl-button> ).wait(( element ) => {
  //         expect( element.one( 'button' ).node.className ).toContain( 'c-button' );
  //       } );
  //     } );
  //
  //     it( `should render color class on button`, () => {
  //       return mount( <bl-button attrs={{ color: 'info' }}>hello</bl-button> ).wait(( element ) => {
  //         expect( element.has( '.c-button--info' ) ).toBe( true );
  //       } );
  //     } );
  //
  //   } );
  //
  //   describe( `events`, () => {
  //
  //     it( `should handle click`, () => {
  //
  //       let clickTriggered = false;
  //       const handleClick = ( e: MouseEvent ) => { clickTriggered = true; };
  //
  //       return mount( <bl-button events={{ click: handleClick }}>Click me</bl-button> )
  //         .wait(( element ) => {
  //           emit( element.node, 'click' );
  //           expect( clickTriggered ).toBe( true );
  //         } );
  //     } );
  //
  //   } );
  //
  // } );

} );
