import { h, Component, prop, emit } from 'skatejs';
import styles from './Progress.scss';
import {ColorType, cssClassForColorType} from '../colorTypes'
import {Size, cssClassForSize} from '../sizes'
import { css } from '../../utils/css';


//public
interface ProgressProps extends JSX.HTMLProps<HTMLElement | any> {
  color?: keyof ColorType,
  displaySize?: keyof Size,
}

export class Progress extends Component<ProgressProps> {
  _props: ProgressProps;
  static get is() { return 'bl-progress' }
  static get props() {
    return {
      value: prop.number({
        attribute: true
      }),
      color: prop.string({
        attribute: true
      }),
      displaySize: prop.string({
        attribute: true
      }),
    }
  }

  color: ColorType;
  displaySize: Size;
  value: number;

  renderCallback() {
    const { color, displaySize, value } = this;

    const sizeClass = cssClassForSize(displaySize);
    const className = css(
      'c-progress',
      sizeClass
    );

    const colorClass = cssClassForColorType('c-progress__bar', color);
    const barClassName = css(
      'c-progress__bar',
      colorClass
    );

    return [
      <style>{styles}</style>,
      <div className={className}>
        <div className={barClassName} style={"width:" + value + "%;"}>
          <slot />
        </div>
      </div>
    ]
  }
}


customElements.define( Progress.is, Progress );


