import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { Tag } from './index';

describe( Tag.is, () => {

  describe( `Custom element`, () => {
    it( `should be registered`, () => {

      expect( customElements.get( Tag.is ) ).toBe( Tag );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tag label="tagLabel" />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Tag.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Tag label={'tagLabel'} />
      ).wait(( element ) => {

        expect( element.has( '.c-tag' ) ).toBe( true );

      } );

    } );

  } );

} );
