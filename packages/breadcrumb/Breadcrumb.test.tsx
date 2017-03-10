import { h, mount } from 'bore';
import * as expect from 'expect';
import { Breadcrumb } from './index';

describe( Breadcrumb.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Breadcrumb.is ) ).toBe( Breadcrumb );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-breadcrumb />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Breadcrumb.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-breadcrumb />
      ).wait(( element ) => {

        expect( element.has( '.c-breadcrumbs' ) ).toBe( true );

      } );

    } );
  } );
} );
