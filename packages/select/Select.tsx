import { h, Component } from 'skatejs';
import { GenericEvents, prop } from '../_helpers';
import Option from './Option';
import { bind } from 'decko';
import { customElement, shadyCssStyles } from '../_helpers/decorators';
import { SelectOverlay } from './components/Overlay';
import styles from './Select.scss';
import { SelectButton } from './components/Button';
import { SelectCard } from './components/Card';

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
@customElement( 'bl-select' )
export default class Select extends Component<SelectProps> {

  @prop( { type: String } ) placeholder: string;
  @prop( { type: Boolean, attribute: { source: true } } ) open = true;
  @prop( { attribute: true } ) value: any;

  get selected(): Option {
    return this._selected;
  }

  get css() {
    return styles;
  }

  get selectedViewValue(): string {
    if ( this.selected ) {
      return this.selected.viewValue;
    }

  }

  private slotElement: HTMLSlotElement;
  private _selected: Option;
  private options: Option[];

  get slottedValue(): any {
    return this.slotElement.assignedNodes( { flatten: true } );
  }

  attributeChangedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.options = this.slottedValue;
      this._setSelectionByValue( this.value );
      this.open = false;
    } );
  }

  renderCallback() {
    return ( [

      <SelectButton onClick={this.toggleOptions}>{this.selectedViewValue || this.placeholder} &#9660;</SelectButton>,

      this.open && <SelectCard>
        <slot ref={this.setSlot} slot="body" />
      </SelectCard>,

      this.open && <SelectOverlay onClick={this.toggleOptions} isFullpage isTransparent />

    ] );
  }

  @bind
  setSlot( element: HTMLSlotElement ) {
    this.slotElement = element;
  }

  @bind
  toggleOptions() {
    this.open = !this.open;
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

  private _updateOptions() {
    this.options.forEach(( option: Option ) => {
      if ( option !== this.selected ) {
        option.deselect();
      }
    } );
  }
}
