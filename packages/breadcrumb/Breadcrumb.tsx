import styles from './Breadcrumb.scss';
import { h, Component } from 'skatejs';
import {BreadcrumbItem} from './Breadcrumb-item';

interface BreadcrumbProps {}

export class Breadcrumb extends Component<BreadcrumbProps> {

  static get is() { return 'bl-breadcrumb'; }

  renderCallback() {
    const items = this.getElementsByTagName('bl-breadcrumb-item');

    if ( items.length > 0 ) {
      const lastItem = items.item(items.length - 1) as BreadcrumbItem;
      lastItem.isLast = true;
    }

    return [
      <style>{styles}</style>,
      <ol className="c-breadcrumbs">
        <slot />
      </ol>
    ];
  }
}

customElements.define( Breadcrumb.is, Breadcrumb );
