import { Button } from '@blaze-elements/button';
import { Card, CardContent, CardFooter, CardHeader } from '@blaze-elements/card';
import { customElement } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import { Drawer } from './index';

const customDivStyleBase = {
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  border: '2px solid black',
} as CSSStyleDeclaration;
const customDivStyle = {
  ...customDivStyleBase,
  marginTop: '10px'
} as CSSStyleDeclaration;

@customElement( 'bl-drawer-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return [
      <style />,
      <fieldset>
        <legend>{Drawer.is}</legend>
        <p>
          Your basic drawer will appear from the selected position of the container.
          The container should have overflow:hidden or you'll see the drawer sliding around.
        </p>
        <p>
          To hide drawer remove flag 'visible'
        </p>
        <div style={customDivStyleBase}>
          <Drawer visible>
            <Card>
              <CardHeader>Drawer from top</CardHeader>
              <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</CardContent>
              <CardFooter><Button>Button</Button></CardFooter>
            </Card>
          </Drawer>
        </div>
        <div style={customDivStyle}>
          <Drawer visible position="bottom">
            <Card>
              <CardHeader>Drawer from bottom</CardHeader>
              <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</CardContent>
              <CardFooter><Button>Button</Button></CardFooter>
            </Card>
          </Drawer>
        </div>
        <div style={customDivStyle}>
          <Drawer visible position="left">
            <Card>
              <CardHeader>Drawer from left</CardHeader>
              <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</CardContent>
              <CardFooter><Button>Button</Button></CardFooter>
            </Card>
          </Drawer>
        </div>
        <div style={customDivStyle}>
          <Drawer visible position="right">
            <Card>
              <CardHeader>Drawer from right</CardHeader>
              <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis.</CardContent>
              <CardFooter><Button>Button</Button></CardFooter>
            </Card>
          </Drawer>
        </div>

      </fieldset>
    ];
  }
}
