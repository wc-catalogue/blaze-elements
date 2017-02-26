
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawNav, {NavProps} from './Nav';
import RawNavItem, {NavItemProps} from './NavItem';
import RawNavContent, {NavContentProps} from './NavContent';

const Nav = customElement( 'bl-nav' )( RawNav ) as typeof RawNav;
const NavItem = customElement( 'bl-nav-item' )( RawNavItem ) as typeof RawNavItem;
const NavContent = customElement( 'bl-nav-content' )( RawNavContent ) as typeof RawNavContent;

export {
  Nav,
  NavItem,
  NavContent
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-nav': GenericTypes.IntrinsicCustomElement<NavProps>
      & GenericTypes.IntrinsicBoreElement<NavProps, void>;
      'bl-nav-item': GenericTypes.IntrinsicCustomElement<NavItemProps>
      & GenericTypes.IntrinsicBoreElement<NavItemProps, void>;
      'bl-nav-content': GenericTypes.IntrinsicCustomElement<NavContentProps>
      & GenericTypes.IntrinsicBoreElement<NavContentProps, void>;
    }
  }
}
