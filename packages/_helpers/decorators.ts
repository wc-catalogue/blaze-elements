import { h, Component, ComponentProps, PropOptions, prop as skProp, define } from 'skatejs';
import { ColorType } from './colorTypes';
export function renderCss(): MethodDecorator {
  return function<T extends Function>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>) {
    return {
      value(this: { css?: string, shadyCss?: string | void } & Object) {
        // we preffer shadyCss which is present if Css Mixin is used, otherwise fallback to css property
        // tslint:disable-next-line:no-invalid-this
        const css = 'shadyCss' in this ? this.shadyCss : this.css;
        // tslint:disable-next-line:no-invalid-this
        return [h('style', css)].concat(descriptor.value.call(this, this));
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
type PropConfig = PropOptions<any, any> & {type?: Function };
type PropType = 'string' | 'number' | 'object' | 'array' | 'boolean';
const identityFn = (_: any) => _;
export function prop(config: PropConfig = {}): PropertyDecorator {
  return function(targetProto: Object, propertyKey: string | symbol) {
    const {type, ...skPropConfig} = config;
    const configType = parseType(type);
    const skatePropTypeFn = skProp[configType] || identityFn;
    const Ctor = targetProto.constructor as typeof Component;
    const existingProps = (Ctor.props || {}) as ComponentProps<any, any>;
    const newProps = {
      ...existingProps,
      ...{[propertyKey]: skatePropTypeFn(skPropConfig)}
    };
    Object.defineProperty(
      Ctor,
      'props',
      {
        configurable: true,
        get() { return newProps; }
      }
    );
  };
}

function parseType(type: Function): PropType {
  if (typeof type !== 'function') {
    return;
  }
  const inst = type() as Array<any> | Object | number | boolean | string;
  if (inst instanceof Array) {
    return 'array';
  }
  if (typeof inst === 'object') {
    return 'object';
  }
  return (typeof inst) as 'boolean' | 'number' | 'string';
}

export function colored(): ClassDecorator {
  return function<T extends typeof Component>(Target: T) {

    const newProps = {
      ...(Target as any).props,
      ...{color: skProp.string<any, ColorType>({attribute: {source: true}})}
    };
    Object.defineProperty(Target, 'props', {get() { return newProps; }});
    return Target;
  };
}

export function disabled(): ClassDecorator {
  return function<T extends typeof Component>(Target: T) {

    const newProps = {
      ...Target.props,
      ...{disabled: skProp.boolean( { attribute: true } )}
    };
    Object.defineProperty(Target, 'props', {get() { return newProps; }});
  };
}
