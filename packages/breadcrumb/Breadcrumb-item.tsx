import styles from './Breadcrumb.scss'
import { h, Component, prop } from 'skatejs';
import { css } from '../../utils/css';

interface BreadcrumbItemProps extends JSX.HTMLProps<HTMLElement | any> {
  isActive?: boolean,
  href?: string
}
export class BreadcrumbItem extends Component<BreadcrumbItemProps> {
  _props: BreadcrumbItemProps;

  static get is() { return 'bl-breadcrumb-item' }

  static get props() {
    return {
      isActive: prop.boolean({
        attribute: true
      }),
      isLast: prop.boolean(),
      href: prop.string({
        attribute: true
      }),
    }
  }

  isActive: boolean;
  isLast: boolean;
  href: string;

  renderCallback() {
    const { isActive, isLast, href } = this;

    const className = css(
      'c-breadcrumbs__crumb', {
        'c-text--loud': isActive,
        'last': isLast,
      }
    );

    const itemContent = isActive || !href
      ? <slot />
      : <a class="c-link" href={href}>
          <slot />
        </a>;

    return [
      <style>{styles}</style>,
      <li className={className}>
        {itemContent}
      </li>
    ]
  }
}

customElements.define( BreadcrumbItem.is, BreadcrumbItem );
