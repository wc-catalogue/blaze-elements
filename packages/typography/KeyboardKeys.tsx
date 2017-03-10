import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './KeyboardKeys.scss';

export type KeyboardKeysProps = Props & EventProps;

export type KeyboardKeysAttrs = {};

export type Props = {};

export type EventProps = {};

export type KeyboardKeysEvents = {};

@shadyCssStyles()
export default class KeyboardKeys extends Component<KeyboardKeysProps> {

  get css() { return styles; }

  renderCallback() {
    return (
      <kbd class="c-kbd">
        <slot />
      </kbd>
    );
  }
}
