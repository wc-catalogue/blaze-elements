import { h, Component } from 'skatejs';
import styles from './Accordion.scss';
import { Collapsible, StateChangedEvent } from '../collapsible/Collapsible';


export class Accordion extends Component<void> {
  static get is() { return 'bl-accordion'; }

  private items = new Array<Collapsible>();

  connectedCallback() {
    super.connectedCallback();
    this.handleStateChanged = this.handleStateChanged.bind(this);
  }

  renderCallback() {
    const collapsibleItems = this.getElementsByTagName('bl-collapsible');
    const numberOfItems = collapsibleItems.length;

    for (let i = 0; i < numberOfItems; i++) {
      const collapsibleItem = collapsibleItems.item(i) as Collapsible;
      collapsibleItem.addEventListener('stateChanged', this.handleStateChanged);
      collapsibleItem.isNotStandAlone = true;
      this.items.push(collapsibleItem);

      if (i === collapsibleItems.length - 1) {
        collapsibleItem.isLast = true;
      }
    }

    return [
      <style>{styles}</style>,
      <div className="c-card c-card--accordion">
        <slot />
      </div>
    ];
  }

  private handleStateChanged(event: StateChangedEvent) {
    this.items.forEach(function(item) {
      if (event.target !== item) {
        item.isOpened = false;
      }
    });
  }
}

customElements.define(Accordion.is, Accordion);
