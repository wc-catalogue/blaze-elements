import { Component, h } from 'skatejs';

import { customElement } from '@blaze-elements/common';
import { Breadcrumb, BreadcrumbItem } from './index';

@customElement( 'bl-breadcrumb-demo' )
export class Demo extends Component<void> {

  renderCallback() {
    return (
      <fieldset>
        <legend>{Breadcrumb.is}</legend>
        <div>
          <Breadcrumb>
            <BreadcrumbItem>Directory 1</BreadcrumbItem>
            <BreadcrumbItem>Directory 2</BreadcrumbItem>
            <BreadcrumbItem href="#directory-3">Directory 3</BreadcrumbItem>
            <BreadcrumbItem isActive>Directory 4</BreadcrumbItem>
            <BreadcrumbItem href="#root-file-5">Root file 5</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </fieldset>
    );
  }
}
