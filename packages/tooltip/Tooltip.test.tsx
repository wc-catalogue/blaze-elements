import { h, mount } from 'bore';
import { Tooltip } from './index';

describe( Tooltip.is, () => {

  describe( `Custom element`, () => {
    it( `should be registered`, () => {

      expect( customElements.get( Tooltip.is ) ).to.equal( Tooltip );

    });

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-tooltip label="hello"/>
      ).wait( element => {

        expect( element.node.localName ).to.equal( Tooltip.is );

      });

    });

    it( `should render via JSX class`, () => {

      return mount(
        <Tooltip label="hello" />
      ).wait(( element ) => {

        expect( element.has('.c-tooltip') ).to.equal( true );

      });

    });
  });

  describe( 'API', () => {

    it( 'should render with correct label', () => {

      return mount(
        '<bl-tooltip label="hello <> Hi"></bl-tooltip>'
      ).wait(( element ) => {

        expect( element.one('span').node.getAttribute('aria-label') ).to.equal( 'hello <> Hi' );

      });

    });

    it( 'should render with default position', () => {

      return mount(
        <Tooltip label="hello" />
      ).wait(( element ) => {

        expect( element.has('.c-tooltip--right') ).to.equal( true );

      });

    });

    it( 'should render with top position', () => {

      return mount(
        '<bl-tooltip label="hello" type="top"></bl-tooltip>'
      ).wait((element) => {

        expect( element.has('.c-tooltip--top') ).to.equal( true );

      });

    });

  });

});
