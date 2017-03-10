
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawOverlay, { OverlayProps } from './Overlay';

const Overlay = customElement( 'bl-overlay' )( RawOverlay ) as typeof RawOverlay;

export {
  Overlay
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-overaly': GenericTypes.IntrinsicCustomElement<OverlayProps>
    }
  }
}
