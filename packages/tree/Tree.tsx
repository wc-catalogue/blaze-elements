import styles from './Tree.scss';
import { h, Component } from 'skatejs';
import { shadyCssStyles } from '@blaze-elements/common';

export type TreeProps = Props & EventProps;

export type Attrs = {};

export type Props = {};

export type EventProps = {};

export type Events = {};

@shadyCssStyles()
export default class Tree extends Component<TreeProps> {

  get css() { return styles; }

  renderCallback() {

    return (
      <ul className="c-tree"><slot /></ul>
    );

  }

}
