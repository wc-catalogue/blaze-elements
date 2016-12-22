import { h, Component } from 'skatejs';
import { Link } from './Link';

export class Demo extends Component<void> {
  static get is() { return 'bl-link-demo' }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Link.is}</legend>
        <p>Link API is the same as: <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">MDN specification</Link></p>
        <div>
          <Link href="http://www.seznam.cz">Czech search engine</Link><br />
          <Link href="http://www.seznam.cz" target="_blank">Czech search engine with target blank</Link><br />
          <Link color="brand">Brand link</Link><br />
          <Link color="info">Info link</Link><br />
          <Link color="warning">Warning link</Link><br />
          <Link color="success">Success link</Link><br />
          <Link color="error">Error link</Link><br />
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
