import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { TagSelector } from './index';

describe( TagSelector.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( TagSelector.is ) ).toBe( TagSelector );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tag-selector />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( TagSelector.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <TagSelector />
      ).wait(( element ) => {

        expect( element.has( '.c-tags' ) ).toBe( true );

      } );

    } );

  } );

} );
