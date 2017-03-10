import Button from '@blaze-elements/button/Button';
import { customElement } from '@blaze-elements/common';

@customElement( 'bl-calendar-button' )
export default class CalendarButton extends Button {
  block = true;
}
