import styles from './Nav.scss';
import { h, Component, prop } from 'skatejs';
import { css } from '../_helpers/css';

interface NavContentProps {
  inline?: boolean,
}
export class NavContent extends Component<NavContentProps> {

  static get is() { return 'bl-nav-content'; }
  static get props() {
    return {
      inline: prop.boolean( {
        attribute: true
      }),
    };
  }

  inline: boolean;

  renderCallback() {
    const { inline } = this;
    const className = css(
      'c-nav__content u-window-box--none',
      {
        'inline-li': inline
      });

    return [
      <style>{styles}</style>,
      <li className={className}>
        <slot />
      </li>
    ];
  }
}

customElements.define( NavContent.is, NavContent );
