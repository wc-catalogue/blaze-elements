// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import { customElement } from '../../_helpers';
import Button from '../../button/Button';

@customElement('bl-calendar-button')
export class CalendarButton extends Button {
  block = true;
}
