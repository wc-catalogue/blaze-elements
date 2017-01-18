import { Tag } from './Tag';

import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Tag.is, () => {

  it( 'should render', () => {

    console.warn('Missing tests for Tag!');

    return mount(
      <Tag label=""/>
    ).wait();

  });

});
