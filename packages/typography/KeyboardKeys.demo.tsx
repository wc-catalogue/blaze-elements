import { h, Component } from 'skatejs';
import { KeyboardKeys } from './KeyboardKeys';

export class KeyboardKeysDemo extends Component<void> {
  static get is() { return 'bl-keyboard-keys-demo'}

  renderCallback() {
    return [
      <style></style>,
        <fieldset>
          <legend>{KeyboardKeys.is}</legend>
          Content with some <KeyboardKeys>keybord+key</KeyboardKeys> and some normal text.
        </fieldset>
    ]
  }
}

customElements.define( KeyboardKeysDemo.is, KeyboardKeysDemo );
