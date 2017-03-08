
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawProgress, { ProgressProps, Attrs, Events } from './Progress';

const Progress = customElement( 'bl-progress' )( RawProgress ) as typeof RawProgress;

export {
  Progress
};


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-progress': GenericTypes.IntrinsicCustomElement<ProgressProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
