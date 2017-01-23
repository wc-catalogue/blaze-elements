import { h, Component, emit, prop } from 'skatejs';
import styles from './Tag.scss';
import { Tag } from './Tag';
import { Input } from '../input/Input';


// public
interface TagSelectorProps {
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

  tags: string[] = [];
  delimiter = ' '; // default value is space ' '
  inputValue = '';

  private handleInput( event: KeyboardEvent ) {
    const input = event.target as Input;
    const { value } = input.inputElement;
    const lastChar = value.substr(-1);
    const newValue = value.slice(0, -1).trim();
    const isDelimiter = lastChar === this.delimiter;

    if ( newValue && isDelimiter ) {
      this.addTag(newValue);
      input.inputElement.value = '';
    }
  }

  private addTag(value: string) {
    const newTags = this.tags.concat(value);
    this.emitNewData( newTags );
  }

  private handleTagClose(event: CustomEvent) {
    const target = event.target as Tag;
    const newTags = this.tags.filter( (tag) => tag !== target.label );
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

    const tags = this.tags.map(label => {
      return <Tag onTagClose={this.handleTagClose} label={label} />;
    });

    return [
      <style>{styles}</style>,
      <div class="c-tags">
        <div class="c-tags__container">
          {tags}
        </div>
        <div class="c-tags__field-container">
          <Input onInput={this.handleInput} value={this.inputValue} />
        </div>
      </div>
    ]
  }

}

customElements.define( TagSelector.is, TagSelector );
