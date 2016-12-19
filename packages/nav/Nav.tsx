import styles from './Nav.scss'
import { h, Component, prop } from 'skatejs';
import { css } from '../../utils/css';



interface NavProps extends JSX.HTMLProps<HTMLElement | any> {
  inline?: boolean,
}
export class Nav extends Component<NavProps> {

  static get is() { return 'bl-nav' }
  static get props() {
    return {
      inline: prop.boolean()
    }
  }

  inline = false;

  renderCallback() {

    const { inline } = this;
    const className = css(
      'c-nav',
      {
        'c-nav--inline': inline,
      });

    return [
      <style>{styles}</style>,
      <ul className={className}><slot /></ul>
    ]
  }
}

customElements.define( Nav.is, Nav );
