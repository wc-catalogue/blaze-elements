import { h, Component } from 'skatejs';
import { Bubble } from './Bubble';

export class Demo extends Component<void> {
  static get is() { return 'bl-bubble-demo' }

  renderCallback() {
    return [
      <style></style>,
      <fieldset>
        <legend>{Bubble.is}</legend>

        <div style={"text-align: center;padding: 5em 5em 0 0"}>
          <div>
            There is some
            <Bubble type="top" isDisplayed disableAutoShowHide>
              <div>
                Some text with bubble on the top<br />
                <code>AAAA</code>
              </div>
            </Bubble> with some other text
          </div>

          <div>
            There is some <Bubble type="top">
            <strong slot="handle">Bubble top</strong>
            <div>Some text with bubble on the top<br /><code>AAAA</code></div>
          </Bubble> with some other text
          </div>

          <div>
            There is some <Bubble>
              <strong slot="handle">Bubble default</strong>
              <div>Some text with bubble on the right<br /><code>AAAA</code></div>
            </Bubble> with some other text
          </div>

          <div>
            There is some <Bubble type="left">
              <strong slot="handle">Bubble left</strong>
              <div>Some text with bubble on the left<br /><code>AAAA</code></div>
            </Bubble> with some other text
          </div>

          <div>
            There is some <Bubble type="bottom">
              <strong slot="handle">Bubble bottom</strong>
              <div>Some text with bubble on the bottom<br /><code>AAAA</code></div>
            </Bubble> with some other text
          </div>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
