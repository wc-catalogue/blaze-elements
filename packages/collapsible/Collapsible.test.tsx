import { Collapsible } from './index';
import * as expect from 'expect';
import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Collapsible.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Collapsible.is ) ).toBe( Collapsible );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-collapsible />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Collapsible.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <bl-collapsible />
      ).wait(( element ) => {

        expect( element.has( '.c-card--accordion' ) ).toBe( true );

      } );

    } );
  } );

  describe( `API`, () => {

    describe( `[isOpened]`, () => {

      it( 'should render closed', () => {

        return mount(
          <bl-collapsible>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some first content <strong>!!!</strong>
            </div>
          </bl-collapsible>
        ).wait(( element ) => !element.has( 'div.c-card__item' ) );

      } );

      it( 'should open when isOpened present', () => {

        return mount(
          <bl-collapsible isOpened>
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some first content <strong>!!!</strong>
            </div>
          </bl-collapsible>
        ).wait(( element ) => element.has( 'div.c-card__item' ) );

      } );

    } );

    describe( `[isLast]`, () => {
      // TODO
    } );
    describe( `[isNotStandAlone]`, () => {
      // TODO
    } );

  } );

  describe( `Interactions`, () => {

    it( 'should open proper collapsible', ( done ) => {

      mount(
        <div>
          <bl-collapsible id="firstCollapsible">
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some first content <strong>!!!</strong>
            </div>
          </bl-collapsible>
          <bl-collapsible id="secondCollapsible">
            <span slot="title">Some <strong>Name</strong></span>
            <div>
              Some first content <strong>!!!</strong>
            </div>
          </bl-collapsible>
        </div>
      ).waitFor(( element ) =>
        (
          !!element.one( '#firstCollapsible' ).node.shadowRoot &&
          !!element.one( '#secondCollapsible' ).node.shadowRoot
        ) ).then(( element ) => {

          const firstCollapsible = element.one( '#firstCollapsible' );
          const secondCollapsible = element.one( '#secondCollapsible' );

          expect( firstCollapsible.has( 'div.c-card__item' ) ).toBe( false );
          expect( secondCollapsible.has( 'div.c-card__item' ) ).toBe( false );

          secondCollapsible.node.addEventListener( 'stateChanged', () => {

            setTimeout(() => {

              expect( firstCollapsible.has( 'div.c-card__item' ) ).toBe( false );
              expect( secondCollapsible.has( 'div.c-card__item' ) ).toBe( true );

              done();

            } );

          } );

          emit(
            secondCollapsible.one( 'label.c-card__item' ).node,
            'click',
            { composed: false }
          );

        } );

    } );

  } );

} );
