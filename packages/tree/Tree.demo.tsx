import{ h, Component } from 'skatejs';
import { Tree } from './Tree';
import { TreeItem } from './Tree-item'

export class Demo extends Component<void> {
  static get is() { return 'bl-tree-demo'}

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Tree.is}</legend>
        <div>
          <Tree>
            <TreeItem>asdf</TreeItem>
            <TreeItem>asdf</TreeItem>
            <TreeItem>asdf</TreeItem>
            <TreeItem>
              <Tree>
                <TreeItem>asdf</TreeItem>
                <TreeItem>asdf</TreeItem>
              </Tree>
            </TreeItem>
          </Tree>
        </div>
      </fieldset>
    ]
  }
}


customElements.define( Demo.is, Demo );
