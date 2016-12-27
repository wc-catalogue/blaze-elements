import { h, Component, prop, emit } from 'skatejs';
import styles from './Collapsible.scss';
import { css } from '../_helpers/css';

// public
interface CollapsibleProps extends JSX.HTMLProps<HTMLElement | any> {
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

export class Collapsible extends Component<CollapsibleProps> {
  static get is(){ return 'bl-collapsible' }
  static get props() {
    return {
      isOpened: prop.boolean({
        attribute: true
      }),
      isNotStandAlone: prop.boolean(),
      isLast: prop.boolean()
    }
  }

  isOpened: boolean;

  // internal property to be used from other components, when there is collection of collapsible items to indicate
  // this is the last one in the collection
  isLast: boolean;

  // internal property to be used from other components, when there is collection of collapsible items
  isNotStandAlone: boolean;

  private handleStateChange(event: Event) {
    this.isOpened = !this.isOpened;

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
    const {isOpened, isLast, isNotStandAlone} = this;

    const wrapperClassName = css(
      'c-card--accordion',
      {
        'c-card': !isNotStandAlone
      }
    );

    const headerClassName = css(
      'c-card__item',
      {
        'last': !isNotStandAlone || isLast,
        'c-card__item--active': isOpened
      }
    );

    const className = css(
      'c-card__item',
      {
        'last': !isNotStandAlone || isLast
      }
    );

    const content = isOpened
      ? <div className={className}>
          <slot />
        </div>
      : null;

    return [
      <style>{styles}</style>,
      <div className={wrapperClassName}>
        <label className={headerClassName} onClick={this.handleStateChange}>
          <slot name="title" />
        </label>
        {content}
      </div>
    ]
  }
}

customElements.define( Collapsible.is, Collapsible );
