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
  static get is() { return 'bl-tag-selector' }
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

  private handleInput( event ) {
    const lastChar = event.target.value.substr(-1);
    const value = event.target.value.slice(0, -1).trim();
    const isDelimiter = lastChar === this.delimiter;

    if ( value && isDelimiter ) {
      this.addTag(value);
      event.target.value = '';
    }
  }

  private addTag(value:string){
    this.tags.push(value);
    this.emitNewData( this.tags );
  }

  private removeTag(event: CustomEvent){
    const index = this.tags.indexOf( event.detail.tag.innerHTML );
    this.tags.splice( index, 1 );
    this.emitNewData( this.tags );
  }

  private emitNewData( tags ) {
    emit(this,'tagChange', {
      detail: {
        tags: tags
      }
    })
  }


  connectedCallback() {
    super.connectedCallback();
    this.handleInput = this.handleInput.bind( this );
    this.removeTag = this.removeTag.bind( this );
  }

  renderCallback() {

    const tags = this.tags.map(tag => {
      return <Tag onTagClose={this.removeTag}>{tag}</Tag>;
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
