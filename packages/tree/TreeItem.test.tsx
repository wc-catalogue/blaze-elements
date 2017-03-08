import { mount, h } from 'bore';
import * as expect from 'expect';
import { TreeItem } from './index';

describe( TreeItem.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( TreeItem.is ) ).toBe( TreeItem );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tree-item />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( TreeItem.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-tree-item />
      ).wait(( element ) => {

        expect( element.has( '.c-tree__item' ) ).toBe( true );

      } );

    } );
  } );
} );
