import { mount, h } from 'bore';
import * as expect from 'expect';
import { Input } from './index';
import { emit } from 'skatejs';

describe( Input.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Input.is ) ).toBe( Input );

    });

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-input value="inputValue" />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Input.is );

      });

    });

    it( `should render via JSX class`, () => {

      return mount(
        <Input value="inputValue" />
      ).wait(( element ) => {

        expect( element.has( '.c-field' ) ).toBe( true );

      });

    });
  });

  describe( `API`, () => {

    describe( `[value]`, () => {

      it( `should render with setted value`, () => {

        return mount(
          <bl-input value="inputValue" />
        ).wait(( element ) => {

          const input: Partial<HTMLInputElement> = element.one( 'input' ).node;
          expect( input.value ).toBe( 'inputValue' );

        });

      });

    });

    describe( `[placeholder]`, () => {

      it( `should render with placeholder`, () => {

        return mount(
          <bl-input placeholder="placeholder value" value="" />
        ).wait(( element ) => {

          const input: Partial<HTMLInputElement> = element.one( 'input' ).node;
          expect( input.getAttribute( 'placeholder' ) ).toBe( 'placeholder value' );

        });

      });

    });

    describe( `[inputSize]`, () => {

      it( `should render with inputSize`, () => {

        return mount(
          <bl-input inputSize="medium" value="" />
        ).wait(( element ) => {

          expect( element.has( '.u-medium' ) ).toBe( true );

        });

      });

    });

    describe( `[valid]`, () => {

      it( `should be valid`, () => {

        return mount(
          <bl-input valid="true" value="" />
        ).wait(( element ) => {

          expect( element.has( '.c-field--success' ) ).toBe( true );

        });

      });

      it( `should be invalid`, () => {

        return mount(
          <bl-input valid="false" value="" />
        ).wait(( element ) => {

          expect( element.has( '.c-field--error' ) ).toBe( true );

        });

      });

    });

    describe( `[disabled]`, () => {

      it( `should render disabled`, () => {

        return mount(
          <bl-input disabled value="" />
        ).wait(( element ) => {

          expect( element.one( 'input' ).node.hasAttribute( 'disabled' ) ).toBe( true );

        });

      });

    });

    describe( `[type]`, () => {

      it( `should have correct type (password)`, () => {

        return mount(
          <bl-input type="password" value="" />
        ).wait(( element ) => {

          expect( element.one( 'input' ).node.getAttribute( 'type' ) ).toBe( 'password' );

        });

      });

    });

    describe( `(change)`, () => {

      it( `should emit onChange event`, () => {

        let changeTriggered = false;
        const handleChange = ( e: CustomEvent ) => {
          changeTriggered = true;
        };

        return mount( <bl-input value="water" events={{ huh: handleChange, change: handleChange } as any} /> )
          .wait(( element ) => {

            const input = element.one( 'input' ).node as HTMLInputElement;
            input.value = 'splash';
            emit( input, 'input' );
            expect( changeTriggered ).toBe( true );

          });

      });

    });

  });

});
