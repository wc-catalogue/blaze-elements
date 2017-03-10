import { css, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h, props } from 'skatejs';
import styles from './Tree.scss';

export type TreeItemProps = Props & EventProps;

export type Attrs = {
  isOpen?: boolean,
};

export type Props = {
  isOpen?: boolean,
};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class TreeItem extends Component<TreeItemProps> {

  get css() { return styles; }

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) isOpen: boolean;

  connectedCallback() {
    super.connectedCallback();
    this.handleClick = this.handleClick.bind( this );
  }

  renderCallback() {
    const { isOpen } = this;
    const hasSubItem = this.getElementsByTagName( 'bl-tree' ).length > 0;

    const className = css(
      'c-tree__item', {
        'c-tree__item--expandable': !isOpen && hasSubItem,
        'c-tree__item--expanded': isOpen && hasSubItem,
      }
    );

    return (
      <li className={className} onClick={this.handleClick}>
        <slot />
        {isOpen ? <slot name="subItems" /> : null}
      </li>
    );
  }

  private handleClick() {
    props( this, { isOpen: !this.isOpen } );
  }

}
