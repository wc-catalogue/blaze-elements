import { h, Component, prop } from 'skatejs';
import styles from './Collapsible.scss';
import {CollapsibleItem, StateChangedEvent} from './CollapsibleItem';
import { css } from '../../utils/css';

// public
interface CollapsibleProps extends JSX.HTMLProps<HTMLElement | any> {
  isOpened?: boolean
}

export class Collapsible extends Component<CollapsibleProps> {
  static get is(){ return 'bl-collapsible' }
  static get props() {
    return {
      isOpened: prop.boolean({
        attribute: true
      })
    }
  }

  isOpened: boolean;

  private handleStateChanged(event: StateChangedEvent) {
    this.isOpened = event.detail.opened;
  }

  connectedCallback(){
    super.connectedCallback();
    this.handleStateChanged = this.handleStateChanged.bind(this);
  }

  renderCallback() {
    const {isOpened} = this;

    return [
      <style>{styles}</style>,
      <div className="c-card">
        <CollapsibleItem isOpened={isOpened} isLast onStateChanged={this.handleStateChanged}>
          <slot name="title" slot="title" />
          <slot />
        </CollapsibleItem>
      </div>
    ]
  }
}

customElements.define( Collapsible.is, Collapsible );
