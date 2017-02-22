import * as expect from 'expect';
import { h, mount, WrappedNode } from 'bore';
import { emit } from 'skatejs';
import { GenericEvents } from '@blaze-elements/common';
import { Toggle } from './index';

describe( Toggle.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Toggle.is ) ).toBe( Toggle );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-toggle />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Toggle.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Toggle />
      ).wait(( element ) => {

        expect( element.has( '.c-toggle' ) ).toBe( true );

      } );

    } );

  } );

  describe( `API`, () => {

    describe( `[disabled]`, () => {

      it( `should set disabled state`, () => {

        return mount(
          <bl-toggle disabled />
        ).wait( checkDisabled );

      } );

      it( `should set disabled state via attribute`, () => {

        return mount(
          <bl-toggle attrs={{ 'disabled': true }} />
        ).wait( checkDisabled );

      } );

      function checkDisabled( element: WrappedNode ) {
        const input: Partial<HTMLInputElement> = element.one( 'input' ).node;
        expect( input.hasAttribute( 'disabled' ) ).toBe( true );
      }

    } );

  } );

  describe( `[color]`, () => {

    it( `should set color`, () => {

      return mount(
        <bl-toggle color="warning" />
      ).wait( checkColor );

    } );

    it( `should set color via attribute`, () => {

      return mount(
        <bl-toggle attrs={{ 'color': 'warning' }} />
      ).wait( checkColor );

    } );

    function checkColor( element: WrappedNode ) {
      const label: Partial<HTMLInputElement> = element.one( 'label' ).node;
      expect( label.classList.contains( 'c-toggle--warning' ) ).toBe( true );
    }

  } );

  describe( `[checked]`, () => {

    it( `should set checked`, () => {

      return mount(
        <bl-toggle checked />
      ).wait( checkChecked );

    } );

    it( `should set checked via attribute`, () => {

      return mount(
        <bl-toggle attrs={{ 'checked': true }} />
      ).wait( checkChecked );

    } );

    function checkChecked( element: WrappedNode ) {
      const input: Partial<HTMLInputElement> = element.one( 'input' ).node;
      expect( input.checked ).toBe( true );
    }

  } );

  describe( `(change)`, () => {

    it( `should emit onChange event with new value`, () => {

      let changeTriggered = false;
      let labelChecked = false;
      const handleChange = ( e: GenericEvents.CustomChangeEvent<string> ) => {
        changeTriggered = true;
        labelChecked = e.detail.value;
      };

      return mount(
        <bl-toggle
          events={{ change: handleChange }}
          checked={labelChecked}
        />
      ).wait(( element ) => {

        // existing day in month
        const input = element.one( 'input' ).node as HTMLLabelElement;
        emit( input, 'change' );
        expect( changeTriggered ).toBe( true );
        expect( labelChecked ).toBe( true );

      } );

    } );

  } );


} );
