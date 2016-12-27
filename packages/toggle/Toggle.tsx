import styles from './Toggle.scss';
import { h, Component, prop, props } from 'skatejs';
import {ColorType, cssClassForColorType} from '../utils/colorTypes'
import { css } from '../../utils/css';


export interface ToggleProps extends JSX.HTMLProps<HTMLInputElement | any> {
  disabled?: boolean,
  checked?: boolean,
  color?: keyof ColorType,
}

export class Toggle extends Component<ToggleProps> {
  _props: ToggleProps;
  static get is(){ return 'bl-toggle'}
  static get props(){
    return {
      disabled: prop.boolean({
        attribute: true
      }),
      checked: prop.boolean({
        attribute: true
      }),
      color: prop.string({
        attribute: true
      })
    }
  }
  disabled = false;
  checked = false;
  color: ColorType;

  private handleChecked(e?:Event){
    props( this, { checked: !this.checked } );
  }
  connectedCallback(){
    super.connectedCallback();
    this.handleChecked = this.handleChecked.bind(this);
  }
  renderCallback(){
    const { disabled, checked, color } = this;
    const colorClass = cssClassForColorType('c-toggle', color);
    const className = css('c-toggle', colorClass);

    return [
      <style>{styles}</style>,
      <label class={className}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={this.handleChecked}
        />
          <div class="c-toggle__track">
            <div class="c-toggle__handle"></div>
          </div>
          <slot/>
      </label>
    ]
  }
}


customElements.define( Toggle.is, Toggle );
