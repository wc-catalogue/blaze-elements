import { h, mount } from 'bore';

import { Nav } from './index';


describe( Nav.is, () => {

  it( 'should render', () => {

    console.warn( 'Missing tests for Nav!' );

    return mount(
      <Nav />
    ).wait();

  } );

} );
