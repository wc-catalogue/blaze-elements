import { h, Component, prop } from 'skatejs';
import { Tag } from './Tag';
import { TagSelector } from './TagSelector';

export class Demo extends Component<void> {
  static get is() { return 'bl-tag-demo'; }
  static get props() {
    return {
      tags: prop.array()
    };
  }

  tags = [ 'milk', 'bread', 'chocolate' ];

  renderCallback() {

    return [
      <style />,
      <fieldset>
        <legend>{Tag.is}</legend>

        <div>
          <Tag onTagClose={this.tagClose} label="T-one" />
          <Tag onTagClose={this.tagClose} label="T-two" />
          <Tag onTagClose={this.tagClose} label="T-three" />
          <Tag onTagClose={this.tagClose} label="T-four" />
        </div>
        <fieldset>
          <legend>Tag Selector</legend>
          <TagSelector
            onTagChange={this.tagChange}
            tags={this.tags}
          />
        </fieldset>
      </fieldset>
    ];
  }

  private tagClose() {
    console.log( 'Tag close emitted', this );
    const element = this;
    element.parentNode.removeChild( element );
  }

  private tagChange( event: CustomEvent ) {
    console.log( 'Tag change:', event.detail.tags );
    this.tags = [ ...event.detail.tags ];
  }
}

customElements.define( Demo.is, Demo );
