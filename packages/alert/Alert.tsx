import { h, Component, prop, emit } from 'skatejs';

import { ColorType, cssClassForColorType, css } from '../_helpers';

// @FIXME this needs to be imported from package import {Button} from '@blaze-elements/button'
import { Button } from '../button';

import styles from './Alert.scss';

type AlertProps = Props & EventProps;
type Props = {
  color?: ColorType,
  isOpen?: boolean,
};
type EventProps = {
  onAlertClose?: ( ev: CustomEvent ) => void,
};

// extend JSX.IntrinsicElements namepsace with our definition
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-alert': AlertProps & Partial<HTMLElement>,
    }
  }
}

export class Alert extends Component<AlertProps> {
  static get is() { return 'bl-alert'; }
  static get props() {
    return {
      color: prop.string( {
        attribute: true
      } ),
      isOpen: prop.boolean( {
        attribute: true
      } )
    };
  }
  static get events() {
    return {
      alertClose: 'alertClose'
    };
  }

  isOpen?= false;
  color?: ColorType;

  renderCallback() {
    const { color, isOpen } = this;
    const colorClass = cssClassForColorType( 'c-alert', color );
    const className = css( 'c-alert', colorClass );

    return [
      <style>{styles}</style>,
      isOpen && (
        <div className={className}>
          <Button close onClick={this.handleClose}>×</Button>
          <slot />
        </div>
      )
    ];
  }

  private handleClose = () => {
    emit( this, Alert.events.alertClose );
  }

}
