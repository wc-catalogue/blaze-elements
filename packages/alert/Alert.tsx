import { h, Component, prop, emit } from 'skatejs';
import styles from './Alert.scss';
import { css } from '../../utils/css';
import { Button } from '../button/Button';

const AlertColors = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error',
};

type AlertColorsType = typeof AlertColors;

// public
interface AlertProps extends JSX.HTMLProps<HTMLElement | any> {
  color?: keyof AlertColorsType,
  isOpen?: boolean,
  onAlertClose?: Function,
}

export class Alert extends Component<AlertProps> {
  _props: AlertProps;
  static get is() { return 'bl-alert' }
  static get props() {
    return {
      color: prop.string(),
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

  color: string;

  renderCallback() {
    const { color, isOpen } = this;
    const className = css(
      'c-alert',{
        'c-alert--brand': color === AlertColors.brand,
        'c-alert--info': color === AlertColors.info,
        'c-alert--warning': color === AlertColors.warning,
        'c-alert--success': color === AlertColors.success,
        'c-alert--error': color === AlertColors.error,
      }
    );

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
