import { h, Component, prop, emit } from 'skatejs';
import styles from './Collapsible.scss';
import { css } from '../../utils/css';

// public
interface CollapsibleItemProps extends JSX.HTMLProps<HTMLElement | any> {
  isOpened?: boolean,
  isLast?: boolean,
  onStateChanged?: (this: this, ev: StateChangedEvent) => any,
}

interface StateChangedEventDetail {
  readonly opened: boolean;
  readonly collapsed: boolean;
}
export interface StateChangedEvent extends Event {
  readonly detail: StateChangedEventDetail
}

export class CollapsibleItem extends Component<CollapsibleItemProps> {
  static get is(){ return 'bl-collapsible-item' }
  static get props() {
    return {
      isOpened: prop.boolean({
        attribute: true
      }),
      isLast: prop.boolean()
    }
  }

  isOpened: boolean;
  isLast: boolean;

  inputElement: HTMLInputElement;

  private handleStateChange(event: Event) {
    this.isOpened = this.inputElement.checked;

    emit(this,'stateChanged', {
      detail: {
        opened: this.isOpened,
        collapsed: !this.isOpened
      }
    }); // emit state changed event on root element
  }

  connectedCallback(){
    super.connectedCallback();
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  renderCallback() {
    const {isOpened, isLast} = this;

    const className = css(
      'c-card__item',
      {
        'last': isLast
      }
    );

    const content = isOpened
      ? <div className={className}>
          <slot />
        </div>
      : null;

    return [
      <style>{styles}</style>,
      <div className="c-card--accordion">
        <input type="checkbox"
               ref={(_ref: HTMLInputElement)=>this.inputElement=_ref}
               id="accordion"
               checked={isOpened}
               onChange={this.handleStateChange} />
        <label className={className} for="accordion">
          <slot name="title" />
        </label>
        {content}
      </div>
    ]
  }
}

customElements.define( CollapsibleItem.is, CollapsibleItem );
