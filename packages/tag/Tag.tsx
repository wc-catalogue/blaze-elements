import { h, Component, emit } from 'skatejs';
import styles from './Tag.scss';
import { Button } from '../button/Button';


// public
interface TagProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagClose?: Function
}

export class Tag extends Component<TagProps> {
  static get is() { return 'bl-tag' }

  private handleClick() {
    emit(this,'tagClose')
  }

  renderCallback() {

    return [
      <style>{styles}</style>,
      <Button tag>
        <slot />
        <span class="c-tag__close" onClick={this.handleClick}>×</span>
      </Button>
      ]
  }

}

customElements.define( Tag.is, Tag );
