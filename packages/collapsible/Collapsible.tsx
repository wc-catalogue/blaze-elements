import { css, GenericEvents, prop, shadyCssStyles } from '@blaze-elements/common';
import { Component, emit, h, props } from 'skatejs';
import styles from './Collapsible.scss';

export type CollapsibleProps = Props & EventProps;

export type Attrs = {
  'is-opened'?: boolean,
};

export type Props = {
  isOpened?: boolean,
  isLast?: boolean,
  isNotStandAlone?: boolean,
};

export type EventProps = {
  onStateChanged?: GenericEvents.CustomChangeHandler<StateChangedEventDetail>
};

export type Events = {
  stateChanged: GenericEvents.CustomChangeHandler<StateChangedEventDetail>
};

export interface StateChangedEventDetail {
  readonly opened: boolean;
  readonly collapsed: boolean;
}

// TODO: Deprecated remove when accordion is refactored
export interface StateChangedEvent extends Event {
  readonly detail: StateChangedEventDetail
}

@shadyCssStyles()
export default class Collapsible extends Component<CollapsibleProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } )
  isOpened: boolean;

  /**
   * internal property to be used from other components,
   * when there is collection of collapsible items to indicate
   * this is the last one in the collection
   */
  @prop( {
    type: Boolean
  } )
  isLast: boolean;

  /**
   * internal property to be used from other components,
   * when there is collection of collapsible items
   */
  @prop( {
    type: Boolean
  } )
  isNotStandAlone: boolean; // TODO: rename this to isCollection

  get css() { return styles; }

  connectedCallback() {
    super.connectedCallback();
    this.handleStateChange = this.handleStateChange.bind( this );
  }

  renderCallback() {
    const { isOpened, isLast, isNotStandAlone } = this;

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

    return (
      <div className={wrapperClassName}>
        <label className={headerClassName} onClick={this.handleStateChange}>
          <slot name="title" />
        </label>
        {content}
      </div>
    );
  }

  private handleStateChange( event: Event ) {

    props( this, { isOpened: !this.isOpened } );

    // TODO: we should emit single boolean instead
    emit( this, 'stateChanged', {
      detail: {
        opened: this.isOpened,
        collapsed: !this.isOpened
      }
    } ); // emit state changed event on root element
  }
}

// TODO: Deprecated remove when accordion is refactored
export {
  Collapsible
}
