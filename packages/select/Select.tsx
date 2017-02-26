import { h, Component, props } from 'skatejs';
import { bind } from 'decko';
import { GenericEvents, prop, shadyCssStyles } from '@blaze-elements/common';
import styles from './Select.scss';
import Option from './Option';
import Overlay from './components/Overlay';
import Button from './components/Button';
import Card from './components/Card';

export type SelectProps = Props & EventHandlers;

export type Props = {
  placeholder?: string,
  value?: any,
  open?: boolean,
};

export type Events = {
  click?: GenericEvents.ClickHandler,
};
export type EventHandlers = {
  onClick?: GenericEvents.ClickHandler,
};

@shadyCssStyles()
export default class Select extends Component<SelectProps> {

  @prop( { type: String, attribute: { source: true } } ) placeholder: string;
  @prop( { type: Boolean, attribute: { source: true } } ) open = true;
  @prop() value: any;

  get selected(): Option {
    return this._selected;
  }

  get css() {
    return styles;
  }

  get selectedViewValue(): string | void {
    if ( this.selected ) {
      return this.selected.viewValue;
    }
  }

  get slottedValue(): any {
    return this.slotElement.assignedNodes( { flatten: true } );
  }

  private slotElement: HTMLSlotElement;
  private _selected: Option;
  private options: Option[];

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.options = this.slottedValue;
      this._setSelectionByValue( this.value );
      this.closeOptions();
    } );
  }

  updatedCallback( previousProps: Props ) {
    // The 'previousProps' will be undefined if it is the initial render.
    if ( !previousProps ) {
      return true;
    }

    this._setSelectionByValue( this.value );
    if ( previousProps.value !== this.value ) {
      this.closeOptions();
    }

    return previousProps.value === this.value || super.updatedCallback( previousProps );
  }

  renderCallback() {
    return ( [

      <Button onClick={this.toggleOptions}>{this.selectedViewValue || this.placeholder} &#9660;</Button>,

      this.open && (
        <Card>
          <slot ref={this.setSlot} slot="body" />
        </Card>
      ),

      this.open && <Overlay onClick={this.closeOptions} isFullpage isTransparent />

    ] );
  }

  @bind
  setSlot( element: HTMLSlotElement ) {
    this.slotElement = element;
  }

  @bind
  toggleOptions() {
    props( this, {
      open: !this.open
    } );
  }

  @bind
  closeOptions() {
    props( this, {
      open: false
    } );
  }

  private _setSelectionByValue( value: any ): void {
    const options = Array.from( this.options );
    for ( let i = 0; i < this.options.length; i++ ) {
      if ( options[ i ].value === value ) {
        options[ i ].select();
        this._selected = options[ i ];
        this._updateOptions();
        return;
      }
    }

    this._clearSelection();
  }

  private _clearSelection(): void {
    this._selected = null;
    this._updateOptions();
  }

  private _updateOptions(): void {
    this.options.forEach(( option: Option ) => {
      if ( option !== this.selected ) {
        option.deselect();
      }
    } );
  }
}
