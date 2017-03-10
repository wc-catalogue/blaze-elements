import {
  ColorType,
  css,
  cssClassForColorType,
  cssClassForSize,
  prop,
  shadyCssStyles,
  Size
} from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Progress.scss';

export type ProgressProps = Props & EventProps;

export type Attrs = {
  value?: number,
  color?: ColorType,
  'display-size'?: keyof Size,
  rounded?: boolean,
};

export type Props = {
  value?: number,
  color?: ColorType,
  displaySize?: keyof Size,
  rounded?: boolean,
};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class Progress extends Component<ProgressProps> {

  @prop( {
    type: Number,
    attribute: {
      source: true
    }
  } ) value: number;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) color: ColorType;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) displaySize: Size;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) rounded: boolean;

  get css() { return styles; }

  renderCallback() {
    const { color, displaySize, value, rounded } = this;

    const sizeClass = cssClassForSize( displaySize );
    const className = css(
      'c-progress',
      sizeClass,
      {
        'c-progress--rounded': rounded
      }
    );

    const colorClass = cssClassForColorType( 'c-progress__bar', color );
    const barClassName = css(
      'c-progress__bar',
      colorClass
    );

    const cssWidth = {
      width: `${value}%`
    } as CSSStyleDeclaration;

    return (
      <div className={className}>
        <div className={barClassName} style={cssWidth}>
          <slot />
        </div>
      </div>
    );
  }
}
