import { GenericEvents, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';

import SelectCardItem from './components/CardItem';

import styles from './Select.scss';

export type OptionProps = Props & EventHandlers;

export type Props = {
  value?: string,
};

export type Events = {
  click?: GenericEvents.ClickHandler,
};
export type EventHandlers = {
  onClick?: GenericEvents.ClickHandler,
};

@shadyCssStyles()
export default class Option extends Component<OptionProps> {

  @prop( { type: Object } ) value: any;
  @prop( { type: Boolean } ) private _selected = false;

  private slotElement: HTMLSlotElement;

  constructor() {
    super();
    this.setSlot = this.setSlot.bind( this );
  }

  get selected() { return this._selected; };

  get css() { return styles; };

  get slottedValue(): Node {
    return this.slotElement.assignedNodes( { flatten: true } )[ 0 ];
  }

  get viewValue() {
    return this.slottedValue.textContent.trim();
  }

  select(): void {
    this._selected = true;
  }

  deselect(): void {
    this._selected = false;
  }

  renderCallback() {

    return (
      <SelectCardItem selected={this.selected}>
        <slot ref={this.setSlot} />
      </SelectCardItem>
    );
  }

  private setSlot( element: HTMLSlotElement ) {
    this.slotElement = element;
  }

}
