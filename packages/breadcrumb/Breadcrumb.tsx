import styles from './Breadcrumb.scss'
import { h, Component } from 'skatejs';

interface BreadcrumbProps extends JSX.HTMLProps<HTMLElement | any> {}

export class Breadcrumb extends Component<BreadcrumbProps> {

  static get is() { return 'bl-breadcrumb' }

  renderCallback() {
    const items = this.getElementsByTagName('bl-breadcrumb-item');

    if ( items.length > 0 ) {
      const lastItem = items.item(items.length - 1);
      lastItem.setAttribute("is-last", "");
    }

    return [
      <style>{styles}</style>,
      <ol className="c-breadcrumbs c-text">
        <slot />
      </ol>
    ]
  }
}

customElements.define( Breadcrumb.is, Breadcrumb );
