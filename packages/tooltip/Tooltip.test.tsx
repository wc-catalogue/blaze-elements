import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { Tooltip } from './index';

describe( Tooltip.is, () => {

  describe( `Custom element`, () => {
    it( `should be registered`, () => {

      expect( customElements.get( Tooltip.is ) ).toBe( Tooltip );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tooltip label="hello" />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Tooltip.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Tooltip label="hello" />
      ).wait(( element ) => {

        expect( element.has( '.c-tooltip' ) ).toBe( true );

      } );

    } );
  } );

  describe( `API`, () => {

    describe( `[label]`, () => {

      it( `should render with correct label`, () => {

        return mount(
          <bl-tooltip label="hello <&> Hi" />
        ).wait(( element ) => {

          expect( element.one( 'span' ).node.getAttribute( 'aria-label' ) ).toBe( 'hello <&> Hi' );

        } );

      } );

    } );

    describe( `[color]`, () => {

      it( `should render with default position`, () => {

        return mount(
          <bl-tooltip label="hello" />
        ).wait(( element ) => {

          expect( element.has( '.c-tooltip--right' ) ).toBe( true );

        } );

      } );

      it( `should render with top position`, () => {

        return mount(
          <bl-tooltip label="hello" type="top" />
        ).wait(( element ) => {

          expect( element.has( '.c-tooltip--top' ) ).toBe( true );

        } );

      } );

    } );

  } );

} );
