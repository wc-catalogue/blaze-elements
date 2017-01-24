import{ h, Component } from 'skatejs';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from './Breadcrumb-item';

export class Demo extends Component<void> {
  static get is() { return 'bl-breadcrumb-demo'; }

  renderCallback() {
    return [
      <style></style>,
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
    ];
  }
}


customElements.define( Demo.is, Demo );
