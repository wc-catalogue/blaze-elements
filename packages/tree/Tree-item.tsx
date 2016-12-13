import styles from './Tree.scss'
import { h, Component, prop } from 'skatejs';

interface TreeItemProps {

}
export class TreeItem extends Component<TreeItemProps> {

  static get is() { return 'bl-tree-item' }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <li className="c-tree__item">
        <span class="c-link">
          <slot />
        </span>
      </li>
    ]
  }
}

customElements.define( TreeItem.is, TreeItem );
