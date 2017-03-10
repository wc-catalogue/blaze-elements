import Collapsible, { StateChangedEvent } from '@blaze-elements/collapsible/Collapsible';
import { shadyCssStyles } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Accordion.scss';

export type AccordionProps = Props & EventProps;

export type Attrs = {};

export type Props = {};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class Accordion extends Component<AccordionProps> {

  get css() { return styles; }

  private items = new Array<Collapsible>();

  connectedCallback() {
    super.connectedCallback();
    this.handleStateChanged = this.handleStateChanged.bind( this );
  }

  renderCallback() {
    const collapsibleItems = this.getElementsByTagName( 'bl-collapsible' );
    const numberOfItems = collapsibleItems.length;

    for ( let i = 0; i < numberOfItems; i++ ) {
      const collapsibleItem = collapsibleItems.item( i ) as Collapsible;
      collapsibleItem.addEventListener( 'stateChanged', this.handleStateChanged );
      collapsibleItem.isNotStandAlone = true;
      this.items.push( collapsibleItem );

      if ( i === collapsibleItems.length - 1 ) {
        collapsibleItem.isLast = true;
      }
    }

    return (
      <div className="c-card c-card--accordion">
        <slot />
      </div>
    );
  }

  private handleStateChanged( event: StateChangedEvent ) {
    this.items.forEach( function( item ) {
      if ( event.target !== item ) {
        item.isOpened = false;
      }
    } );
  }
}
