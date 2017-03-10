import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Breadcrumb.scss';

import BreadcrumbItem from './BreadcrumbItem';

export type BreadcrumbProps = Props & EventProps;

export type Attrs = {};

export type Props = {};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class Breadcrumb extends Component<BreadcrumbProps> {

  get css() { return styles; }

  renderCallback() {
    const items = this.getElementsByTagName( 'bl-breadcrumb-item' );

    if ( items.length > 0 ) {
      const lastItem = items.item( items.length - 1 ) as BreadcrumbItem;
      lastItem.isLast = true;
    }

    return (
      <ol className="c-breadcrumbs">
        <slot />
      </ol>
    );
  }
}
