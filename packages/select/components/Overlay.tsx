// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import { customElement } from '@blaze-elements/common';
import { Overlay as OriginalOverlay } from '@blaze-elements/overlay';

@customElement('bl-select-overlay')
export default class Overlay extends OriginalOverlay {}
