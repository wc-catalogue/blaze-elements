import { h, Component, prop, emit } from 'skatejs';
import {ColorType, cssClassForColorType} from '../colorTypes'
import styles from './Alert.scss';
import { css } from '../../utils/css';
import { Button } from '../button/Button';

// public
interface AlertProps extends JSX.HTMLProps<HTMLElement | any> {
  color?: keyof ColorType,
  isOpen?: boolean,
  onAlertClose?: Function,
}

export class Alert extends Component<AlertProps> {
  _props: AlertProps;
  static get is() { return 'bl-alert' }
  static get props() {
    return {
      color: prop.string({
        attribute: true
      }),
      isOpen: prop.boolean({
        attribute: true
      })
    }
  }


  isOpen = false;
  private close() {
    this.isOpen = false;
    emit(this, 'alertClose');
  }

  connectedCallback(){
    super.connectedCallback();
    this.close = this.close.bind(this);
  }

  color: ColorType;

  renderCallback() {
    const { color, isOpen } = this;
    const colorClass = cssClassForColorType('c-alert', color);
    const className = css('c-alert', colorClass);

    return [
      <style>{styles}</style>,
      isOpen && <div className={className}>
        <Button type="close" onClick={this.close}>×</Button>
        <slot />
      </div>
    ]
  }

}

customElements.define( Alert.is, Alert );
