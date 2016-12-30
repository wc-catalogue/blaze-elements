import { h, Component } from 'skatejs';
import { Drawer } from './Drawer';
import { Card } from '../card/Card';
import { Button } from '../button/Button';

export class Demo extends Component<void> {
  static get is() { return 'bl-drawer-demo' }

  renderCallback() {
    return [
      <style type="text/css"></style>,
      <fieldset>
        <legend>{Drawer.is}</legend>
        <p>
          Your basic drawer will appear from the selected position of the container. The container should have overflow:hidden or you'll see the drawer sliding around.
        </p>
        <p>
          To hide drawer remove flag 'visible'
        </p>
        <div style="position: relative; height: 200px; overflow: hidden; border: 2px solid black">
          <Drawer visible>
            <Card>
              <span slot="heading">Drawer from top</span>
              <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
              <span slot="footer"><Button>Button</Button></span>
            </Card>
          </Drawer>
        </div>
        <div style="position: relative; height: 200px; overflow: hidden; border: 2px solid black; margin-top: 10px">
          <Drawer visible position="bottom">
            <Card>
              <span slot="heading">Drawer from bottom</span>
              <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
              <span slot="footer"><Button>Button</Button></span>
            </Card>
          </Drawer>
        </div>
        <div style="position: relative; height: 200px; overflow: hidden; border: 2px solid black; margin-top: 10px">
          <Drawer visible position="left">
            <Card>
              <span slot="heading">Drawer from left</span>
              <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
              <span slot="footer"><Button>Button</Button></span>
            </Card>
          </Drawer>
        </div>
        <div style="position: relative; height: 200px; overflow: hidden; border: 2px solid black; margin-top: 10px">
          <Drawer visible position="right">
            <Card>
              <span slot="heading">Drawer from right</span>
              <span slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</span>
              <span slot="footer"><Button>Button</Button></span>
            </Card>
          </Drawer>
        </div>

      </fieldset>
    ]
  }
}

customElements.define( Demo.is, Demo );
