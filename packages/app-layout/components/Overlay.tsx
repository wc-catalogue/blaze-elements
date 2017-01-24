import { define } from 'skatejs';

import { Overlay as OriginalOverlay } from '../../overlay/Overlay';

export class Overlay extends OriginalOverlay {

  static get is() { return 'app-layout-overlay'; }

}

define( Overlay );
