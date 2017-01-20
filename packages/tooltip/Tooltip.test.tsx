import { Tooltip } from './Tooltip';

import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Tooltip.is, () => {

  it( 'should render', () => {

    console.warn('Missing tests for Tooltip!');

    return mount(
      <Tooltip label="hello"/>
    ).wait();

  });

});
