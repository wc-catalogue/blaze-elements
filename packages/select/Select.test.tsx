import { h, mount, WrappedNode } from 'bore';
import * as expect from 'expect';
import SelectButton from './components/Button';
import { Option, Select } from './index';

describe( Select.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {
      expect( customElements.get( Select.is ) ).toBe( Select );
    } );

    it( `should render via JSX IntrinsicElement`, () => {
      return mount( <bl-select>
        <bl-option value="cs">Czech</bl-option>
      </bl-select> ).wait(( element ) => {
        expect( element.node.localName ).toBe( Select.is );
      } );
    } );

    it( `should render`, () => {
      return mount( <Select>
        <Option value="cs">Czech</Option>
      </Select> ).wait(( element ) => {
        expect( element.has( SelectButton.is ) ).toBe( true );
      } );
    } );
  } );

  describe( `API`, () => {

    describe( `[placeholder]`, () => {

      const expectedText = 'Placeholder Text ▼';

      it( `should set placeholder`, () => {

        return mount(
          <bl-select placeholder="Placeholder Text">
            <bl-option value="cs">Czech</bl-option>
          </bl-select>
        ).wait( checkPlaceholder );

      } );

      it( `should set placeholder via attribute`, () => {

        return mount(
          <bl-select attrs={{ placeholder: 'Placeholder Text' }}>
            <bl-option value="cs">Czech</bl-option>
          </bl-select>
        ).wait( checkPlaceholder );

      } );

      function checkPlaceholder( element: WrappedNode ) {
        const button: Partial<HTMLInputElement> = element.one( SelectButton.is ).node;
        expect( button.innerText ).toBe( expectedText );
      }

    } );

    describe( `[value]`, () => {

      it( `should set value`, () => {

        return mount(
          <bl-select value="en">
            <bl-option value="cs">Czech</bl-option>
            <bl-option value="en">English</bl-option>
          </bl-select>
        ).wait(( element: WrappedNode ) => {
          const selectButton = element.one( 'bl-select-button' ).node;
          expect( selectButton.innerText ).toBe( 'English ▼' );
        } );

      } );

    } );

  } );

} );
