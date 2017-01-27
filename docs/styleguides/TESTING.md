# Testing

What should be tested and how:

1. Component registration to `customElements` registry and initial render
2. API - primarily props. attributes if we support it. ( if we use attributes reflection jsut test string html version for that API)

## Example ( Button ):

```ts
import * as expect from 'expect';
import { h, mount } from 'bore';

import { Button } from './index';

describe( Button.is, () => {

  // 1. Component registration
  describe( `Custom element`, () => {
    it( `should be registered`, () => {
      expect( customElements.get( Button.is ) ).toBe( Button );
    });
    it( `should render via JSX IntrinsicElement `, () => {
      return mount( <bl-button>Hello</bl-button> ).wait( element => {
        expect( element.node.localName ).toBe( Button.is );
      });
    });
    it( `should render `, () => {
      return mount( <Button /> ).wait(( element ) => {
        expect( element.has( '.c-button' ) ).toBe( true );
      });
    });
  });

  // 2. API
  describe( `API`, () => {
    // 2.1 color property ( we use [] brackets like in Angular to make clear what is prop and what is event)
    describe( `[color]`, () => {

      it( `should render no color class on button by default`, () => {
        return mount( `<bl-button>huhuhu</bl-button>` )
        .wait(( element ) => {
          expect( element.one( 'button' ).node.className ).toBe( 'c-button' );
        });
      });

      it( `should render color class on button`, () => {
        return mount( `<bl-button color="info"></bl-button>` ).wait(( element ) => {
          expect( element.has( '.c-button--info' ) ).toBe( true );
        });
      });

    });

  });

});
```


