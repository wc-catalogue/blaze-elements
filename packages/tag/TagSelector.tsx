import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';
import { Button } from '../button/Button';
import { Tag } from './Tag';


// public
interface TagSelectorProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagChange?: Function,
  onTagAdd?: Function,
  delimiter?: string,
  tags?: string[]
}

export class TagSelector extends Component<TagSelectorProps> {
  static get is() { return 'bl-tag-selector' }
  static get props() {
    return {
      tags: prop.array(),
      delimiter: prop.string(),
    }
  }

  inputValue: string;

  private handleTagSelectorSearch( event ) {
    if ( event.which === 13 ) {
      emit( this, 'tagAdd' );
      event.target.value = '';
    }
    emit( this, 'tagChange' );
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleTagSelectorSearch = this.handleTagSelectorSearch.bind( this );
  }

  inputElement = null;
  tags = [];

  renderCallback() {

    const tags = this.tags.map(tag => {
      return <Tag>{tag}</Tag>;
    });

    return [
      <style>{styles}</style>,
      <div class="c-tags">
        <div class="c-tags__container">
          {{tags}}
        </div>
        <div class="c-tags__field-container">
          <input class="c-field"
                 onKeyup={this.handleTagSelectorSearch}
                 value={this.inputValue}
                 ref={(_ref: HTMLDivElement)=>this.inputElement=_ref}/>
        </div>
      </div>
    ]
  }

}

customElements.define( TagSelector.is, TagSelector );
