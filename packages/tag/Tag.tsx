import { h, Component, emit, } from 'skatejs';
import { GenericEvents, prop, shadyCssStyles } from '@blaze-elements/common';
import styles from './Tag.scss';

export type TagProps = Props & EventProps;

export type Props = {
  label: string,
};

export type EventProps = {
  onTagClose?: GenericEvents.CustomChangeHandler<string>,
};

export type Events = {
  'tag-close': GenericEvents.CustomChangeHandler<string>
};

@shadyCssStyles()
export default class Tag extends Component<TagProps> {

  get css() { return styles; }

  static get events() {
    return {
      TAG_CLOSE: 'tagClose'
    };
  }

  @prop( { type: String, attribute: { source: true } } ) label = '';

  constructor() {
    super();
    this.handleClick = this.handleClick.bind( this );
  }

  renderCallback() {
    const { label } = this;

    return [
      <button type="button" class="c-button c-tag">
        {label}
        <span class="c-tag__close" onClick={this.handleClick}>×</span>
      </button>
    ];
  }

  private handleClick() {
    emit( this, Tag.events.TAG_CLOSE, {
      detail: {
        tag: this
      }
    } );
  }

}
