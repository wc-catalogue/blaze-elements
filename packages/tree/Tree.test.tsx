import { h, mount } from 'bore';
import * as expect from 'expect';
import { Tree } from './index';

describe( Tree.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Tree.is ) ).toBe( Tree );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tree />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Tree.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-tree />
      ).wait(( element ) => {

        expect( element.has( '.c-tree' ) ).toBe( true );

      } );

    } );
  } );
} );
