import { h, Component } from 'skatejs';
import { Tree, TreeItem } from './index';
import { customElement } from '@blaze-elements/common';

@customElement( 'bl-tree-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return (
      <fieldset>
        <legend>{Tree.is}</legend>
        <div>
          <Tree>
            <TreeItem>
              Directory 1
              <Tree slot="subItems">
                <TreeItem>File 1</TreeItem>
                <TreeItem>File 2</TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem>
              Directory 2
              <Tree slot="subItems">
                <TreeItem>File 1</TreeItem>
                <TreeItem>File 2</TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem>
              Directory 3
              <Tree slot="subItems">
                <TreeItem>File 1</TreeItem>
                <TreeItem>File 2</TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem isOpen>
              Directory 4
              <Tree slot="subItems">
                <TreeItem>File 1</TreeItem>
                <TreeItem>File 2</TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem>Root file 5</TreeItem>
          </Tree>
        </div>
      </fieldset>
    );
  }
}
