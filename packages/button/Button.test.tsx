import * as expect from 'expect';
import { h } from '../_helpers';
import { mount } from 'bore';

import { Button } from './index';

describe(Button.is, () => {

describe( `Custom element`, () => {
  it( `should be registered`, () => {
    expect( customElements.get( Button.is ) ).toBe( Button );
  });
  it( `should render via JSX IntrinsicElement`, () => {
    return mount( <bl-button>Hello</bl-button> ).wait( element => {
      expect( element.node.localName ).toBe( Button.is );
    });
  });
  it( `should render`, () => {
    return mount( <Button /> ).wait(( element ) => {
      expect( element.has( '.c-button' ) ).toBe( true );
    });
  });
});

describe( `API`, () => {

  describe( `[color]`, () => {

    it( `should render no color class on button by default`, () => {
      return mount(<bl-button attributes={{color:'brand'} as any}>huhuh</bl-button>).wait(( element ) => {
        expect( element.one( 'button' ).node.className ).toContain( 'c-button' );
      });
    });

    it( `should render color class on button`, () => {
      return mount( <bl-button attributes={ { color: 'info' } as any }></bl-button> ).wait(( element ) => {
        expect( element.has( '.c-button--info' ) ).toBe( true );
      });
    });

  });

});

});
