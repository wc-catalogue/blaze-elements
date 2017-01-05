import { h, Component, prop } from 'skatejs';
import { Tag } from './Tag';
import { TagSelector } from './TagSelector';
import { EventHandler } from '../../manual_definitions/jsx/index';

export class Demo extends Component<void> {
  static get is() { return 'bl-tag-demo' }

  static get props() {
    return {
      tags: prop.array()
    }
  }

  tags = [
    { text: 'Tag 1' },
    { text: 'Tag 2' },
    { text: 'Tag 3' },
  ];

  private tagClose() {
    console.log( 'Tag close emitted', this )
    const element = this;
    element.parentNode.removeChild( element );
  }

  private tagChange( event ) {
    // console.log( event );
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
                       tags={['milk','bread','chocolate']}></TagSelector>
        </fieldset>
      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
