
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawTooltip, { Attrs, Events, TooltipProps } from './Tooltip';

const Tooltip = customElement( 'bl-tooltip' )( RawTooltip ) as typeof RawTooltip;

export {
  Tooltip
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-tooltip': GenericTypes.IntrinsicCustomElement<TooltipProps>
      & GenericTypes.IntrinsicBoreElement<Attrs, Events>
    }
  }
}
