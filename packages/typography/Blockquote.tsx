import { h, Component } from 'skatejs';
import { ColorType, cssClassForColorType, css, prop, shadyCssStyles } from '@blaze-elements/common';
import styles from './Blockquote.scss';

export type BlockquoteProps = Props & EventProps;

export type BlockquoteAttrs = {
  color?: string
};

export type Props = {
  color?: string
};

export type EventProps = {};

export type BlockquoteEvents = {};

@shadyCssStyles()
export default class Blockquote extends Component<BlockquoteProps> {

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } )
  color: ColorType;

  get css() { return styles; }

  renderCallback() {

    const { color } = this;

    const colorClass = cssClassForColorType( 'c-blockquote', color );
    const className = css(
      'c-blockquote',
      colorClass
    );

    return (
      <blockquote className={className}>
        <div className="c-blockquote__body">
          <slot />
        </div>
        <footer class="c-blockquote__footer">
          <slot name="footer" />
        </footer>
      </blockquote>
    );
  }
}
