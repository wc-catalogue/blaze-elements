// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import { customElement } from '../../_helpers';
import { CardItem } from '../../card/CardItem';

@customElement( 'bl-select-card-item' )
export class SelectCardItem extends CardItem {

  get css() {
    return (
      `:hover { 
         background: rgba(0, 0, 0, 0.1) 
       }`
    );
  }

}
