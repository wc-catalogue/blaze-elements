import { h, Component, prop } from 'skatejs';
import styles from './Overlay.demo.scss';
import { Overlay } from './Overlay';
import { Button } from '../button/Button';

export class Demo extends Component<void> {
  static get is() { return 'bl-overlay-demo' }
  static get props() {
    return {
      overlay: prop.boolean(),
      fullPageOverlay: prop.boolean(),
    }
  }

  private overlay = false;
  private fullPageOverlay = false;

  private showOverlay() {
    this.overlay = true;
  }
  private showFullPageOverlay() {
    this.fullPageOverlay = true;
  }

  private dismissOverlay() {
    this.overlay = false;
  }
  private dismissFullPageOverlay() {
    this.fullPageOverlay = false;
  }

  connectedCallback(){
    super.connectedCallback();
    this.showOverlay = this.showOverlay.bind(this);
    this.showFullPageOverlay = this.showFullPageOverlay.bind(this);
    this.dismissOverlay = this.dismissOverlay.bind(this);
    this.dismissFullPageOverlay = this.dismissFullPageOverlay.bind(this);
  }

  renderCallback() {
    const { overlay, fullPageOverlay } = this;

    const overlayFragment = overlay
      ? <Overlay isDismissable onClick={this.dismissOverlay}></Overlay>
      : null;

    const fullPageOverlayFragment = fullPageOverlay
      ? <Overlay isFullpage isDismissable onClick={this.dismissFullPageOverlay}></Overlay>
      : null;


    return [
      <style>{styles}</style>,
      <fieldset>
        <legend>{Overlay.is}</legend>

        <div>
          <h3>Normal overlay</h3>
          <div className={"modal-demo"}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non lectus sed nisl molestie malesuada.
              Aliquam id dolor. Quisque porta. Vivamus luctus egestas leo. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Etiam egestas wisi a erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Proin mattis lacinia justo. Aliquam ante. Praesent id justo in neque elementum ultrices.
              Fusce aliquam vestibulum ipsum.
            </p>
            <Overlay></Overlay>
          </div>

          <h3>Transparent overlay</h3>
          <div className={"modal-demo"}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non lectus sed nisl molestie malesuada.
              Aliquam id dolor. Quisque porta. Vivamus luctus egestas leo. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Etiam egestas wisi a erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Proin mattis lacinia justo. Aliquam ante. Praesent id justo in neque elementum ultrices.
              Fusce aliquam vestibulum ipsum.
            </p>
            <Overlay isTransparent></Overlay>
          </div>

          <h3>Dismissable overlay</h3>
          <Button onClick={this.showOverlay}>Show overlay</Button>
          <div className={"modal-demo"}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non lectus sed nisl molestie malesuada.
              Aliquam id dolor. Quisque porta. Vivamus luctus egestas leo. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Etiam egestas wisi a erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Proin mattis lacinia justo. Aliquam ante. Praesent id justo in neque elementum ultrices.
              Fusce aliquam vestibulum ipsum.
            </p>
            {overlayFragment}
          </div>

          <h3>Fullpage dismissable overlay</h3>
          <Button onClick={this.showFullPageOverlay}>Show fullpage overlay</Button>
          {fullPageOverlayFragment}
        </div>
      </fieldset>,
    ]
  }
}

customElements.define( Demo.is, Demo );
