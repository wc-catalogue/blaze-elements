import { h, Component, prop } from 'skatejs';
import styles from './Accordion.scss';
import {Collapsible, StateChangedEvent} from '../collapsible/Collapsible';

// public
interface AccordionProps extends JSX.HTMLProps<HTMLElement | any> {
  isOpened?: boolean
}

export class Accordion extends Component<AccordionProps> {
  static get is(){ return 'bl-accordion' }

  private items = new Array<Collapsible>();

  private handleStateChanged(event: StateChangedEvent) {
    this.items.forEach(function(item) {
      if ( event.target != item ) {
        item.isOpened = false;
      }
    });
  }

  connectedCallback(){
    super.connectedCallback();
    this.handleStateChanged = this.handleStateChanged.bind(this);
  }

  renderCallback() {
    const collapsibleItems = this.getElementsByTagName('bl-collapsible');

    for(let i = 0; i < collapsibleItems.length; i++) {
      const collapsibleItem = collapsibleItems.item(i) as Collapsible;
      collapsibleItem.addEventListener('stateChanged', this.handleStateChanged);
      collapsibleItem.isNotStandAlone = true;
      this.items.push(collapsibleItem);

      if (i == collapsibleItems.length - 1) {
        collapsibleItem.isLast = true;
      }
    }

    return [
      <style>{styles}</style>,
      <div className="c-card c-card--accordion">
        <slot />
      </div>
    ]
  }
}

customElements.define( Accordion.is, Accordion );
