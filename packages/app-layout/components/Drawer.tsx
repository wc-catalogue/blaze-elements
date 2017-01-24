import { define } from 'skatejs';

import { Drawer as OriginalDrawer } from '../../drawer/Drawer';

export class Drawer extends OriginalDrawer {

  static get is() { return 'app-layout-drawer'; }

}

define( Drawer );
