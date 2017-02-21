// @FIXME this needs to be imoprted from 'bl-overlay' package, not relatively
import { Overlay } from '../../overlay/Overlay';

export class DropdownButtonOverlay extends Overlay {
  static get is() { return 'bl-dropdown-button-overlay'; }
}
