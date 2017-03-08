
import { customElement, GenericTypes } from '@blaze-elements/common';
import RawTree, { TreeProps } from './Tree';
import RawTreeItem, { TreeItemProps } from './TreeItem';

const Tree = customElement( 'bl-tree' )( RawTree ) as typeof RawTree;
const TreeItem = customElement( 'bl-tree-item' )( RawTreeItem ) as typeof RawTreeItem;

export {
  Tree,
  TreeItem,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bl-tree': GenericTypes.IntrinsicCustomElement<TreeProps>
      & GenericTypes.IntrinsicBoreElement<TreeProps, void>;
      'bl-tree-item': GenericTypes.IntrinsicCustomElement<TreeItemProps>
      & GenericTypes.IntrinsicBoreElement<TreeItemProps, void>;
    }
  }
}
