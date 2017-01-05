import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';
import { Button } from '../button/Button';
import { Tag } from './Tag';


// public
interface TagSelectorProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagChange?: Function,
  onTagAdd?: Function,
  delimiter?: string,
  tags?: any
}

export class TagSelector extends Component<TagSelectorProps> {
  static get is() { return 'bl-tag-selector' }
  static get props() {
    return {
      tags: prop.array({
        attribute: true
      })
    }
  }

  inputValue: string;
  inputElement: HTMLInputElement = null;
  tags = [];

  private handleTagSelectorSearch( event ) {
    if ( event.which === 13 ) {
      emit( this, 'tagChange' );
      event.target.value = '';
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleTagSelectorSearch = this.handleTagSelectorSearch.bind( this );
  }

  renderCallback() {
    console.log( 'tags:', this.tags );
    const tags = this.tags.map(tag => {
      return <Tag>{tag}</Tag>;
    });

    return [
      <style>{styles}</style>,
      <div class="c-tags">
        <div class="c-tags__container">
          {tags}
        </div>
        <div class="c-tags__field-container">
          <input class="c-field"
                 onKeyup={this.handleTagSelectorSearch}
                 value={this.inputValue}
                 ref={(_ref: HTMLInputElement)=>this.inputElement=_ref}/>
        </div>
      </div>
    ]
  }

}

customElements.define( TagSelector.is, TagSelector );
