import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';
import { Tag } from './Tag';


// public
interface TagSelectorProps extends JSX.HTMLProps<HTMLElement | any> {
  onTagChange?: Function,
  delimiter?: string,
  tags?: any
}

export class TagSelector extends Component<TagSelectorProps> {

  constructor() {
    super();
    this.handleInput = this.handleInput.bind( this );
    this.handleTagClose = this.handleTagClose.bind( this );
  }

  static get is() { return 'bl-tag-selector' }
  static get events() {
    return {
      TAG_CHANGE: 'tagChange'
    }
  }
  static get props() {
    return {
      tags: prop.array({
        attribute: true
      }),
      delimiter: prop.string({
        attribute: true
      }),
    }
  }

  tags = [];
  delimiter = ' '; // default value is space ' '

  private handleInput( event: Event ) {
    const { value } = event.target;
    const lastChar = value.substr(-1);
    const newValue = value.slice(0, -1).trim();
    const isDelimiter = lastChar === this.delimiter;

    if ( newValue && isDelimiter ) {
      this.addTag(newValue);
      event.target.value = '';
    }
  }

  private addTag(value: string) {
    const newTags = this.tags.concat(value);
    this.emitNewData( newTags );
  }

  private handleTagClose(event: CustomEvent) {
    const index = this.tags.indexOf( event.detail.tag.innerHTML );
    const newTags = this.tags.filter( (tag, tagIdx) => tagIdx !== index );
    this.emitNewData( newTags );
  }

  private emitNewData( tags: string[] ) {
    emit(this, TagSelector.events.TAG_CHANGE, {
      detail: {
        tags: tags
      }
    })
  }

  renderCallback() {

    const tags = this.tags.map(tag => {
      return <Tag onTagClose={this.handleTagClose}>{tag}</Tag>;
    });

    return [
      <style>{styles}</style>,
      <div class="c-tags">
        <div class="c-tags__container">
          {tags}
        </div>
        <div class="c-tags__field-container">
          <input class="c-field"
                 onInput={this.handleInput} />
        </div>
      </div>
    ]
  }

}

customElements.define( TagSelector.is, TagSelector );