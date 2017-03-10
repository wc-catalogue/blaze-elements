import { css, prop } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Nav.scss';

export const Positions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  fixed: 'fixed'
};

export type PositionsType = typeof Positions;

export type NavProps = Props;

export type Props = {
  inline?: boolean,
  shadow?: boolean,
  position?: keyof PositionsType,
};

export default class Nav extends Component<NavProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) inline = false;

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) shadow = false;

  @prop( {
    type: String,
    attribute: {
      source: true
    }
  } ) position: string;

  renderCallback() {

    const { inline, shadow, position } = this;

    if ( inline ) {

      const items = this.querySelectorAll( 'bl-nav-item, bl-nav-content' );
      const length = items.length;

      if ( length ) {
        for ( let i = 0; i < length; i++ ) {
          items[ i ].setAttribute( 'inline', '' );
        }
      }

    }

    const className = css(
      'c-nav',
      {
        'c-nav--inline': inline,
        'u-highest': shadow,
        'c-nav--top': position === Positions.top,
        'c-nav--bottom': position === Positions.bottom,
        'c-nav--right': position === Positions.right,
        'c-nav--left': position === Positions.left,
        'c-nav--fixed': position === Positions.fixed,
      } );

    return [
      <style>{styles}</style>,
      <ul className={className}><slot /></ul>
    ];
  }
}
