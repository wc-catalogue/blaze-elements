// @FIXME this needs to be imoprted from 'bl-button' package, not relatively

import { customElement } from '@blaze-elements/common';
import { CardItem as OriginalCardItem } from '@blaze-elements/card';

@customElement( 'bl-select-card-item' )
export default class CardItem extends OriginalCardItem {

  get css() {
    return (
      `:hover {
         background: rgba(0, 0, 0, 0.1)
       }`
    );
  }

}
