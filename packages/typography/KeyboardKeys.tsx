import { h, Component } from 'skatejs';
import styles from './KeyboardKeys.scss';
import { css } from '@blaze-elements/common';

// public
interface KeyboardKeysProps {
}

export class KeyboardKeys extends Component<KeyboardKeysProps> {
  static get is() { return 'bl-keyboard-keys'; }

  renderCallback() {
    const className = css(
      'c-kbd'
    );
    return [
      <style>{styles}</style>,
      <kbd className={className}>
        <slot />
      </kbd>
    ];
  }
}

customElements.define( KeyboardKeys.is, KeyboardKeys );
