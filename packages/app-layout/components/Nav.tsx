import { define } from 'skatejs';

import { Nav as OriginalNav } from '../../nav/Nav';

export class Nav extends OriginalNav {

  static get is() { return 'bl-app-layout-nav'; }

}

define( Nav );
