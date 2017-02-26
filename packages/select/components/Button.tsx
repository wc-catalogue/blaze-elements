// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import { customElement } from '@blaze-elements/common';
import { Button as OriginalButton} from '@blaze-elements/button';

@customElement('bl-select-button')
export default class Button extends OriginalButton {}
