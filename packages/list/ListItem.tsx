import { h, Component } from 'skatejs';
import styles from './ListItem.scss';

// public
export class ListItem extends Component<any> {

  static get is() { return 'bl-list-item'; }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <li class="c-list__item"><slot /></li>
    ];
  };

}

customElements.define( ListItem.is, ListItem );
