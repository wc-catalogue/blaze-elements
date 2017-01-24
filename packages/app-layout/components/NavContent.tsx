import { define } from 'skatejs';

import { NavContent as OriginalNavContent } from '../../nav/NavContent';

export class NavContent extends OriginalNavContent {

  static get is() { return 'app-layout-nav-content'; }

}

define( NavContent );
