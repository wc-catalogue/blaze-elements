import { css, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Breadcrumb.scss';

export type BreadcrumbItemProps = Props & EventProps;

export type Attrs = {
  'is-active': boolean,
  'href': boolean,
};

export type Props = {
  isActive?: boolean,
  isLast?: boolean,
  href?: string,
};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class BreadcrumbItem extends Component<BreadcrumbItemProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) isActive: boolean;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) isLast: boolean;

  @prop( {
    type: String,
  } ) href: string;

  get css() { return styles; }

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
      : <a class="c-link" href={href}><slot /></a>;

    return (
      <li className={className}>
        {itemContent}
      </li>
    );
  }
}
