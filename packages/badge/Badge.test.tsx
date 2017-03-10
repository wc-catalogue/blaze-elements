import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { Badge } from './index';

describe( Badge.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Badge.is ) ).toBe( Badge );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-badge />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Badge.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Badge />
      ).wait(( element ) => {

        expect( element.has( '.c-badge' ) ).toBe( true );

      } );

    } );
  } );

  describe( `API`, () => {

    describe( `[color]`, () => {

      it( `should render with correct color`, () => {

        return mount(
          <bl-badge color="warning" />
        ).wait(( element ) => {

          expect( element.has( '.c-badge--warning' ) ).toBe( true );

        } );

      } );

    } );

    describe( `[ghost]`, () => {

      it( `should render ghosted`, () => {

        return mount(
          <bl-badge ghost />
        ).wait(( element ) => {

          expect( element.has( '.c-badge--ghost' ) ).toBe( true );

        } );

      } );

    } );

    describe( `[rounded]`, () => {

      it( `should render rounded`, () => {

        return mount(
          <bl-badge rounded />
        ).wait(( element ) => {

          expect( element.has( '.c-badge--rounded' ) ).toBe( true );

        } );

      } );

    } );

  } );

} );
