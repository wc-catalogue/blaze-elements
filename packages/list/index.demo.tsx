import{ h, Component } from 'skatejs';
import { List } from './List';
import { ListItem } from './ListItem'

export class Demo extends Component<void> {
  static get is() { return 'bl-list-demo'}

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>Classic</legend>
        <List>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item
            <List>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item
                <List>
                  <ListItem>Item</ListItem>
                  <ListItem>Item</ListItem>
                  <ListItem>Item</ListItem>
                  <ListItem>Item</ListItem>
                </List>
              </ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListItem>
        </List>
      </fieldset>,
      <fieldset>
        <legend>Ordered</legend>
        <List ordered>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item
            <List ordered>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item
                <List ordered>
                  <ListItem class="ordered">Item</ListItem>
                  <ListItem class="ordered">Item</ListItem>
                  <ListItem class="ordered">Item</ListItem>
                </List>
              </ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListItem>
        </List>


      </fieldset>
    ]
  }
}


customElements.define( Demo.is, Demo );
