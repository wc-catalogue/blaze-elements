import { h, Component } from 'skatejs';
import { bind } from 'decko';
import { prop, shadyCssStyles, GenericEvents } from '@blaze-elements/common';

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

  @bind
  private setSlot( element: HTMLSlotElement ) {
    this.slotElement = element;
  }

}
