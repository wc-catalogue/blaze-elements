
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawBreadcrumb, { BreadcrumbProps } from './Breadcrumb';
import RawBreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumbItem';

const Breadcrumb = customElement( 'bl-breadcrumb' )( RawBreadcrumb ) as typeof RawBreadcrumb;
const BreadcrumbItem = customElement( 'bl-breadcrumb-item' )( RawBreadcrumbItem ) as typeof RawBreadcrumbItem;

export {
  Breadcrumb,
  BreadcrumbItem
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-breadcrumb': GenericTypes.IntrinsicCustomElement<BreadcrumbProps>
      & GenericTypes.IntrinsicBoreElement<BreadcrumbProps, void>;
      'bl-breadcrumb-item': GenericTypes.IntrinsicCustomElement<BreadcrumbItemProps>
      & GenericTypes.IntrinsicBoreElement<BreadcrumbItemProps, void>;
    }
  }
}
