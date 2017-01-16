import { Input } from './Input';

import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Input.is, () => {

  it( 'should set value and emit on change', ( done ) => {

    mount(<Input value="initial"/>).wait((element) => {

      element.node.addEventListener('change', function() {

        expect(element.node.value).to.equal('ok');

        done();

      });

      const innerInput = element.one('input').node;
      innerInput.value = 'ok';
      emit(innerInput, 'change', {composed: false});

    });

  });

  it( 'should set value and emit on input', ( done ) => {

    mount(<Input value="initial"/>).wait((element) => {

      element.node.addEventListener('input', function() {

        expect(element.node.value).to.equal('ok');

        done();

      });

      const innerInput = element.one('input').node;
      innerInput.value = 'ok';
      emit(innerInput, 'input', {composed: true});
    });

  });

});
