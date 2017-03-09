import { h, Component } from 'skatejs';

import { GenericEvents, EventEmitter, event, prop, shadyCssStyles } from '@blaze-elements/common';
import TagInput from './components/Input';

import styles from './Tag.scss';
import Tag from './Tag';


export type TagSelectorProps = Props & EventProps;

export type Props = {
  delimiter?: string,
  tags?: any
};

export type EventProps = {
  onTagChange?: Function,
};

export type Events = {
  'tag-change': GenericEvents.CustomChangeHandler<string>
};

@shadyCssStyles()
export default class TagSelector extends Component<TagSelectorProps> {

  get css() { return styles; }

  @prop( {
    type: Array,
    attribute: { source: true },
  } ) tags: string[] = [];

  @prop( {
    type: String,
    attribute: { source: true },
  } ) delimiter = ' '; // default value is space ' '

  @event() tagChange = new EventEmitter<{ tags: string[] }>();

  constructor() {
    super();
    this.handleInput = this.handleInput.bind( this );
    this.handleTagClose = this.handleTagClose.bind( this );
  }

  renderCallback() {

    const tags = this.tags.map(( label ) => (
      <Tag
        onTagClose={this.handleTagClose}
        label={label}
      />
    ) );

    return [
      <div class="c-tags">
        <div class="c-tags__container">
          {tags}
        </div>
        <div class="c-tags__field-container">
          <TagInput onChange={this.handleInput} value="" />
        </div>
      </div>
    ];
  }

  private handleInput( event: GenericEvents.CustomChangeEvent<string> ) {
    const input = event.target as TagInput;
    const value = event.detail.value;
    const lastChar = value.substr( -1 );
    const newValue = value.slice( 0, -1 ).trim();
    const isDelimiter = lastChar === this.delimiter;

    if ( newValue && isDelimiter ) {
      this.addTag( newValue );
      input.value = '';
    } else {
      input.value = value;
    }
  }

  private addTag( value: string ) {
    const newTags = this.tags.concat( value );
    this.emitNewData( newTags );
  }

  // @TODO correctly annotate event to proper type
  private handleTagClose( event: CustomEvent ) {
    const target = event.target as Tag;
    const newTags = this.tags.filter(( tag ) => tag !== target.label );
    this.emitNewData( newTags );
  }

  private emitNewData( tags: string[] ) {
    this.tagChange.emit( { tags } );
  }

}
