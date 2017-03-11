import { css, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Bubble.scss';

export const BubbleTypes = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

export type BubbleProps = Props & Events;
export type Props = {
  type?: keyof typeof BubbleTypes,
  isDisplayed?: boolean,
  disableAutoShowHide?: boolean
};
export type Events = {};

@shadyCssStyles()
export default class Bubble extends Component<BubbleProps> {

  @prop( { type: String } ) type = 'right';
  @prop( { type: Boolean, attribute: { source: true } } ) isDisplayed = false;
  @prop( { type: Boolean } ) disableAutoShowHide = false;

  get css() { return styles; }

  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind( this );
    this.handleMouseLeave = this.handleMouseLeave.bind( this );
  }

  renderCallback() {
    const { isDisplayed, type } = this;
    const className = css(
      'c-bubble', {
        'c-bubble--right': type === BubbleTypes.right,
        'c-bubble--left': type === BubbleTypes.left,
        'c-bubble--top': type === BubbleTypes.top,
        'c-bubble--bottom': type === BubbleTypes.bottom,
      }
    );

    return [
      isDisplayed
        ? (
          <div
            tabIndex={0}
            className={'bubble-wrapper'}
            onMouseleave={this.handleMouseLeave}
            onBlur={this.handleMouseLeave}
          >
            <slot name="handle" />
            <div className={className}>
              <slot />
            </div>
          </div> )
        : (
          <div
            tabIndex={0}
            className={'bubble-wrapper'}
            onMouseover={this.handleMouseOver}
            onFocus={this.handleMouseOver}
          >
            <slot name="handle" />
          </div>
        )
    ];
  }

  private handleMouseOver() {
    if ( !this.disableAutoShowHide ) {
      this.isDisplayed = true;
    }
  }

  private handleMouseLeave() {
    if ( !this.disableAutoShowHide ) {
      this.isDisplayed = false;
    }
  }

}
