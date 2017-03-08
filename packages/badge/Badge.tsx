import styles from './Badge.scss';
import { h, Component } from 'skatejs';
import { ColorType, cssClassForColorType, css, prop, shadyCssStyles } from '@blaze-elements/common';

export type BadgeProps = Props & Events;
export type Props = {
  color?: ColorType,
  rounded?: boolean,
  ghost?: boolean,
};
export type Events = {};

@shadyCssStyles()
export default class Badge extends Component<BadgeProps> {

  @prop( { type: String, attribute: { source: true } } ) color: ColorType;
  @prop( { type: Boolean, attribute: { source: true } } ) rounded: boolean;
  @prop( { type: Boolean, attribute: { source: true } } ) ghost: boolean;

  get css() { return styles; }

  renderCallback() {

    const { color, rounded, ghost } = this;

    const colorClass = cssClassForColorType( 'c-badge', color );
    const className = css(
      'c-badge',
      colorClass,
      {
        'c-badge--rounded': rounded,
        'c-badge--ghost': ghost,
      }

    );

    return [
      <span className={className}><slot /></span>
    ];
  }
}
