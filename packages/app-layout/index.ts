
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawAppLayout, { AppLayoutProps, Attrs, Events } from './AppLayout';

const AppLayout = customElement( 'bl-app-layout' )( RawAppLayout ) as typeof RawAppLayout;

export {
  AppLayout
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-app-layout': GenericTypes.IntrinsicCustomElement<AppLayoutProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
