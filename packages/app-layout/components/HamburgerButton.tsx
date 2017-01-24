import { h, define, Component, prop } from 'skatejs';

type HamburgerButtonProps = Props & EventProps;

type Props = {
  color?: string
};

type EventProps =  {
  onClick?: typeof HTMLElement.prototype.onclick,
};

export class HamburgerButton extends Component<HamburgerButtonProps> {

  static get props() {
    return {
      color: prop.string({
        attribute: {
          source: true
        },
        initial: 'black'
      })
    };
  }

  color: string;

  renderCallback() {
    return [
      <style>
        {`span { color: ${this.color}; }`}
      </style>,
      <span>☰</span>
    ];
  }

}

define( HamburgerButton );
