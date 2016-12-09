import styles from './Toggle.scss';
import { h, Component, prop, props } from 'skatejs';
import { css } from '../../utils/css';


export interface ToggleProps extends JSX.HTMLProps<HTMLInputElement | any> {
  disabled?: boolean,
  checked?: boolean,
  type?: string,
}
const ToggleTypes = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error'
};

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
      type: prop.string({
        attribute: true
      })
    }
  }
  disabled = false;
  checked = false;
  type = '';

  private handleChecked(e?:Event){
    props( this, { checked: !this.checked } );
  }
  connectedCallback(){
    super.connectedCallback();
    this.handleChecked = this.handleChecked.bind(this);
  }
  renderCallback(){
    const { disabled, checked, type } = this;
    const className = css(
      'c-toggle',
      {
        'c-toggle--brand': type === ToggleTypes.brand,
        'c-toggle--info': type === ToggleTypes.info,
        'c-toggle--success': type === ToggleTypes.success,
        'c-toggle--warning': type === ToggleTypes.warning,
        'c-toggle--error': type === ToggleTypes.error,
      }
    );
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
