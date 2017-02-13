// @FIXME this needs to be imoprted from 'bl-button' package, not relatively
import { Button } from '../../button/Button';
import { customElement } from '../../_helpers';

@customElement('bl-calendar-button')
export class CalendarButton extends Button {
  block = true;
}
