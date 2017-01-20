import { Progress } from './Progress';

import { h, mount } from 'bore';
import { emit } from 'skatejs';

describe( Progress.is, () => {

  it( 'should render', () => {

    console.warn('Missing tests for Progress!');

    return mount(
      <Progress value={10}/>
    ).wait();

  });

});
