import { h, Component, prop } from 'skatejs';
import styles from './List.scss';
import { css } from '../_helpers/css';

// public
interface ListProps extends JSX.HTMLProps<HTMLElement | any> {
  ordered?: boolean,
  inline?: boolean,
  unstyled?: boolean,
}

export class List extends Component<ListProps> {

  static get is() { return 'bl-list'; }
  static get props() {
    return {
      ordered: prop.boolean(),
      inline: prop.boolean(),
      unstyled: prop.boolean(),
      depth: prop.string({
        attribute: true
      }),
    };
  }

  ordered: boolean;
  unstyled: boolean;
  inline: boolean;
  depth = '';

  renderCallback() {

    // const nextLists = this.querySelectorAll( 'bl-list' );
    // let length = nextLists.length;
    // for ( let i = 0; i < length; i++ ) {
    //   nextLists[i].setAttribute('depth', this.depth + 'd' );
    // }

    const { ordered, unstyled, inline, depth } = this;

    const className = css(
      'c-list',
      `c-list-depth-${depth.length}`,
      {
        'c-list--ordered': ordered,
        'c-list--unstyled': unstyled,
        'c-list c-list--inline': inline
      });

    return [
      <style>{styles}</style>,
      !ordered && <ul className={className}>
        <slot/>
      </ul>,
      ordered && <ol className={className}>
        <slot id="huh"/>
      </ol>
    ];
  };

}

customElements.define( List.is, List );
