import { h, Component, prop } from 'skatejs';
import { Tag } from './Tag';
import { TagSelector } from './TagSelector';

export class Demo extends Component<void> {
  static get is() { return 'bl-tag-demo' }
  static get props() {
    return {
      tags: prop.array()
    }
  }

  tags = ['milk','bread','chocolate'];

  private tagClose() {
    console.log( 'Tag close emitted', this )
    const element = this;
    element.parentNode.removeChild( element );
  }

  private tagChange( event ) {
    console.log( 'Tag change:', event.detail.tags );
    this.tags = [].concat( event.detail.tags );
  }

  renderCallback() {

    return [
      <style></style>,
      <fieldset>
        <legend>{Tag.is}</legend>

        <div>
          <Tag onTagClose={this.tagClose}>Tag one</Tag>
          <Tag onTagClose={this.tagClose}>Tag two</Tag>
          <Tag onTagClose={this.tagClose}>Tag three</Tag>
          <Tag onTagClose={this.tagClose}>Tag four</Tag>
        </div>
        <fieldset>
          <legend>Tag Selector</legend>
          <TagSelector onTagChange={this.tagChange}
                       tags={this.tags}></TagSelector>
        </fieldset>
      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
