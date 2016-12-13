import styles from './Tree.scss'
import { h, Component, prop } from 'skatejs';
import { css } from '../../utils/css';

interface TreeItemProps extends JSX.HTMLProps<HTMLElement | any> {
  hasSubItem?: boolean,
  isOpen?: boolean,
}
export class TreeItem extends Component<TreeItemProps> {
  _props: TreeItemProps;

  static get is() { return 'bl-tree-item' }

  static get props() {
    return {
      hasSubItem: prop.boolean( {
        attribute: true
      } ),
      isOpen: prop.boolean( {
        attribute: true
      } ),
    }
  }

  isOpen: boolean;
  hasSubItem: boolean;

  private handleClick() {
    this.isOpen = !this.isOpen;
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleClick = this.handleClick.bind(this);
  }

  renderCallback() {
    const { isOpen, hasSubItem } = this;

    const className = css(
      'c-tree__item', {
        'c-tree__item--expandable': !isOpen && hasSubItem,
        'c-tree__item--expanded': isOpen && hasSubItem,
      }
    );
    return [
      <style>{styles}</style>,
      <li className={className} onClick={this.handleClick}>
        <slot></slot>
        { isOpen ? <slot name="subItems" /> : null }
      </li>
    ]
  }
}

customElements.define( TreeItem.is, TreeItem );
