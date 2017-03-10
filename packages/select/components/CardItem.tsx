// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import CardItem from '@blaze-elements/card/CardItem';
import { customElement } from '@blaze-elements/common';

@customElement( 'bl-select-card-item' )
export default class SelectCardItem extends CardItem {

  get css() {
    return (
      `:hover {
         background: rgba(0, 0, 0, 0.1)
       }`
    );
  }

}
