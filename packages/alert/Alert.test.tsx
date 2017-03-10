import { h, mount } from 'bore';
import * as expect from 'expect';

import { Alert } from './index';

describe( Alert.is, () => {

  describe( `Custom element`, () => {
    it( `should be registered`, () => {

      expect( customElements.get( Alert.is ) ).toBe( Alert );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-alert />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Alert.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Alert isOpen={true} />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Alert.is );

      } );

    } );

  } );

} );
