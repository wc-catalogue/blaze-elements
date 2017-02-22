import styles from './Nav.scss';
import { h, Component, prop } from 'skatejs';
import { css } from '@blaze-elements/common';

const Positions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  fixed: 'fixed'
};

type PositionsType = typeof Positions;

interface NavProps {
  inline?: boolean,
  shadow?: boolean,
  position?: keyof PositionsType,
}
export class Nav extends Component<NavProps> {

  static get is() { return 'bl-nav'; }
  static get props() {
    return {
      inline: prop.boolean( {
        attribute: true
      } ),
      shadow: prop.boolean( {
        attribute: true
      } ),
      position: prop.string( {
        attribute: true
      } )
    };
  }

  inline = false;
  shadow = false;
  position: string;

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
