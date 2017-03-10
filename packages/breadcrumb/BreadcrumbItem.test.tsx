import { h, mount } from 'bore';
import * as expect from 'expect';
import { BreadcrumbItem } from './index';

describe( BreadcrumbItem.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( BreadcrumbItem.is ) ).toBe( BreadcrumbItem );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-breadcrumb-item />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( BreadcrumbItem.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-breadcrumb-item />
      ).wait(( element ) => {

        expect( element.has( '.c-breadcrumbs__crumb' ) ).toBe( true );

      } );

    } );
  } );
} );
