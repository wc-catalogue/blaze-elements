import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';

// public
interface TagProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagClose?: Function
}

export class Tag extends Component<TagProps> {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  static get is() { return 'bl-tag' }
  static get events() {
    return {
      TAG_CLOSE: 'tagClose'
    }
  }

  private handleClick() {
    emit( this, Tag.events.TAG_CLOSE, {
      detail: {
        tag: this
      }
    } )
  }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <button type="button" class="c-button c-tag">
        <slot />
        <span class="c-tag__close" onClick={this.handleClick}>×</span>
      </button>
    ]
  }

}

customElements.define( Tag.is, Tag );
