import styles from './Tree.scss';
import { h, Component } from 'skatejs';

interface TreeProps { }

export class Tree extends Component<TreeProps> {

  static get is() { return 'bl-tree'; }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <ul className="c-tree"><slot /></ul>
    ];
  }
}

customElements.define( Tree.is, Tree );
