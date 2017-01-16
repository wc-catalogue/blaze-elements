import { Collapsible } from './Collapsible';

import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Collapsible.is, () => {

  it( 'should render closed', () => {

    return mount(
      <Collapsible>
        <span slot="title">Some <strong>Name</strong></span>
        <div>
          Some first content <strong>!!!</strong>
        </div>
      </Collapsible>
    ).wait((element) => !element.has( 'div.c-card__item' ));

  });

  it( 'should open when isOpened present', () => {

    return mount(
      <Collapsible isOpened>
        <span slot="title">Some <strong>Name</strong></span>
        <div>
          Some first content <strong>!!!</strong>
        </div>
      </Collapsible>
    ).wait((element) => element.has( 'div.c-card__item' ));

  });

  it( 'should open proper collapsible', ( done ) => {

    mount(
      <div>
        <Collapsible id="firstCollapsible">
          <span slot="title">Some <strong>Name</strong></span>
          <div>
            Some first content <strong>!!!</strong>
          </div>
        </Collapsible>
        <Collapsible id="secondCollapsible">
          <span slot="title">Some <strong>Name</strong></span>
          <div>
            Some first content <strong>!!!</strong>
          </div>
        </Collapsible>
      </div>
    ).waitFor((element) => {

      const firstCollapsible = element.one('#firstCollapsible');
      const secondCollapsible = element.one('#secondCollapsible');

      expect( firstCollapsible.has('div.c-card__item') ).to.be.false;
      expect( secondCollapsible.has('div.c-card__item') ).to.be.false;

      secondCollapsible.node.addEventListener('stateChanged', function() {

        setTimeout(function () {

          expect(firstCollapsible.has('div.c-card__item')).to.be.false;
          expect(secondCollapsible.has('div.c-card__item')).to.be.true;

          done();

        });

      });

      emit(
        secondCollapsible.shadowRoot.querySelector('label.c-card__item'),
        'click',
        {composed: false}
      );

    });

  });


});
