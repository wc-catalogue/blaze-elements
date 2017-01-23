import { Badge } from './index';
import { mount } from 'bore';
import { h } from '../_helpers';
import * as expect from 'expect';

describe( Badge.is, () => {

  describe( `Custom element`, () => {
    it( `should be registered`, () => {

      expect( customElements.get( Badge.is ) ).toBe( Badge );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-badge/>
      ).wait( element => {

        expect( element.node.localName ).toBe( Badge.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Badge/>
      ).wait( ( element ) => {

        expect( element.has( '.c-badge' ) ).toBe( true );

      } );

    } );
  } );

  describe( 'API', () => {

    it( 'should render with correct color', () => {

      return mount(
        <bl-badge attributes={{color:'warning'} as any}></bl-badge>
      ).wait( ( element ) => {

        expect( element.has( '.c-badge--warning' ) ).toBe( true );

      } );

    } );

    it( 'should render ghosted', () => {

      return mount(
        <bl-badge ghost></bl-badge>
      ).wait( ( element ) => {

        expect( element.has( '.c-badge--ghost' ) ).toBe( true );

      } );

    } );

    it( 'should render rounded', () => {

      return mount(
        <bl-badge rounded></bl-badge>
      ).wait( ( element ) => {

        expect( element.has( '.c-badge--rounded' ) ).toBe( true );

      } );

    } );

  } );

} );


