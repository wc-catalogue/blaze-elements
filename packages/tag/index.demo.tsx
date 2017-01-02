import { h, Component } from 'skatejs';
import { Tag } from './Tag';

export class Demo extends Component<void> {
  static get is() { return 'bl-tag-demo' }

  private tagClose() {
    console.log('Tag close emitted', this)
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

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
