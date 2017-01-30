import { Card } from './Card';

import { h, mount } from 'bore';

describe( Card.is, () => {

  it( 'should render', () => {

    console.warn( 'Missing tests for Card!' );

    return mount(
      <Card />
    ).wait();

  });

});
