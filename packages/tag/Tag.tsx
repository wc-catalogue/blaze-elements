import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';

// public
interface TagProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagClose?: Function
}

export class Tag extends Component<TagProps> {
  static get is() { return 'bl-tag' }

  private handleClick() {
    emit( this, 'tagClose', {
      detail: {
        tag: this
      }
    } )
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleClick = this.handleClick.bind(this);
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
