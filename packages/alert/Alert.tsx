import { h, Component, emit } from 'skatejs';
import { ColorType, cssClassForColorType, css, prop, shadyCssStyles } from '@blaze-elements/common';
import styles from './Alert.scss';
import AlertButton from './components/Button';

export type AlertProps = Props & Events;
export type Props = {
  color?: ColorType,
  isOpen?: boolean,
};
export type Events = {
  onAlertClose?: ( ev: CustomEvent ) => void,
};

@shadyCssStyles()
export default class Alert extends Component<AlertProps> {

  @prop( { type: String, attribute: { source: true } } ) color: ColorType;
  @prop( { type: Boolean, attribute: { source: true } } ) isOpen = false;

  static get events() {
    return {
      alertClose: 'alertClose'
    };
  }

  get css() { return styles; }

  renderCallback() {
    const { color, isOpen } = this;
    const colorClass = cssClassForColorType( 'c-alert', color );
    const className = css( 'c-alert', colorClass );

    return [
      isOpen && (
        <div className={className}>
          <AlertButton close onClick={this.handleClose}>×</AlertButton>
          <slot />
        </div>
      )
    ];
  }

  private handleClose = () => {
    emit( this, Alert.events.alertClose );
  }

}
