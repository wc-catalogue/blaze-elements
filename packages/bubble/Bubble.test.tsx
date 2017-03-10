import { h } from '@blaze-elements/common';
import { mount } from 'bore';
import * as expect from 'expect';
import { Bubble } from './index';

describe( Bubble.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Bubble.is ) ).toBe( Bubble );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-bubble />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Bubble.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Bubble />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Bubble.is );

      } );

    } );

  } );

} );
