import { customElement } from '@blaze-elements/common';
import { Button as OriginalButton } from '@blaze-elements/button';

@customElement('bl-calendar-button')
export default class Button extends OriginalButton {
  block = true;
}
