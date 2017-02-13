import { h, Component, prop, define } from 'skatejs';
import { ColorType } from './colorTypes';
export function renderCss(): MethodDecorator {
  return function<T extends Function>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>) {
    return {
      value(this: { css: string}) {
        // tslint:disable-next-line:no-invalid-this
        return [h('style', this.css)].concat(descriptor.value.call(this, this));
      }
    };
  };
}

export function customElement(name: string): ClassDecorator {
  return function<T extends typeof Component>(Target: T) {
    Object.defineProperty(Target, 'is', {get() { return name; }});
    return define(Target);
  };
}

export function colored(): ClassDecorator {
  return function<T extends typeof Component>(Target: T) {

    const newProps = {
      ...(Target as any).props,
      ...{color: prop.string<any, ColorType>({attribute: {source: true}})}
    };
    Object.defineProperty(Target, 'props', {get() { return newProps; }});
    return Target;
  };
}

export function disabled(): ClassDecorator {
  return function<T extends typeof Component>(Target: T) {

    const newProps = {
      ...Target.props,
      ...{disabled: prop.boolean( { attribute: true } )}
    };
    Object.defineProperty(Target, 'props', {get() { return newProps; }});
  };
}
