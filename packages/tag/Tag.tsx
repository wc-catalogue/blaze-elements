import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';

// public
interface TagProps {
  onTagClose?: Function,
  label: string,
}

export class Tag extends Component<TagProps> {

  static get is() { return 'bl-tag'; }
  static get events() {
    return {
      TAG_CLOSE: 'tagClose'
    };
  }
  static get props() {
    return {
      label: prop.string( {
        attribute: true
      } )
    };
  }

  label = '';

  constructor() {
    super();
    this.handleClick = this.handleClick.bind( this );
  }

  renderCallback() {
    const { label } = this;

    return [
      <style>{styles}</style>,
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

customElements.define( Tag.is, Tag );
