import { Tooltip } from './index';
import { h, mount } from 'bore';

describe( Tooltip.is, () => {

  it( 'should render', () => {

    return mount(
      <Tooltip label="hello"/>
    ).wait((element) => {
      expect( element.has('.c-tooltip') ).to.be.true;
      expect( element.has('.c-tooltip--right') ).to.be.true;
      expect( element.one('span').node.getAttribute('aria-label') ).to.equals( 'hello' );
    });

  });

  it( 'should render element', () => {

    return mount(
      <bl-tooltip label="hello"></bl-tooltip>
    ).wait((element) => {
      expect( element.has('.c-tooltip') ).to.be.true;
      expect( element.has('.c-tooltip--right') ).to.be.true;
      expect( element.one('span').node.getAttribute('aria-label') ).to.equals( 'hello' );
    });

  });

  it( 'should render with top tooltip', () => {

    return mount(
      <Tooltip label="hello" type="top" />
    ).wait((element) => {
      expect( element.has('.c-tooltip--top') ).to.be.true;
    });

  });

  it( 'should render element with top tooltip', () => {

    return mount(
      <bl-tooltip label="hello" type="top"></bl-tooltip>
    ).wait((element) => {
      expect( element.has('.c-tooltip--top') ).to.be.true;
    });

  });

});
