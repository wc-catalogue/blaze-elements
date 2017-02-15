import { h, Component, prop } from 'skatejs';
import { ColorType, cssClassForColorType } from '../_helpers/colorTypes';
import styles from './Blockquote.scss';
import { css } from '../_helpers/css';

// public
interface BlockquoteProps {
  color?: ColorType,
}

export class Blockquote extends Component<BlockquoteProps> {
  static get is() { return 'bl-blockquote'; }
  static get props() {
    return {
      color: prop.string( {
        attribute: true
      } )
    };
  }

  color: ColorType;

  renderCallback() {

    const { color } = this;

    const colorClass = cssClassForColorType( 'c-blockquote', color );
    const className = css(
      'c-blockquote',
      colorClass
    );

    return [
      <style>{styles}</style>,
      <blockquote className={className}>
        <div className="c-blockquote__body">
          <slot />
        </div>
        <footer class="c-blockquote__footer">
          <slot name="footer" />
        </footer>
      </blockquote>
    ];
  }
}

customElements.define( Blockquote.is, Blockquote );
