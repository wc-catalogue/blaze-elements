import { h, mount } from 'bore';
import * as expect from 'expect';
import { Option } from './index';

describe( `<bl-option>`, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( 'bl-option' ) ).toBe( Option );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount(
        <bl-option value="cs">Czech</bl-option>
      ).wait(( element ) => {
        expect( element.node.localName ).toBe( 'bl-option' );
      } );
    } );

    it( `should render`, () => {
      return mount( <Option>option</Option> ).wait(( element ) => {
        expect( element.has( 'bl-select-card-item' ) ).toBe( true );
      } );
    } );
  } );

} );
