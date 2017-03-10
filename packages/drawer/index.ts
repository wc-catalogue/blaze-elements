import { customElement, GenericTypes } from '@blaze-elements/common';
import RawDrawer, { DrawerProps, Events, Props } from './Drawer';

const Drawer = customElement( 'bl-drawer' )( RawDrawer ) as typeof RawDrawer;
export { Drawer };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-drawer': GenericTypes.IntrinsicCustomElement<DrawerProps> & GenericTypes.IntrinsicBoreElement<Props, Events>;
    }
  }
}
