  export type ClickEvent = typeof HTMLElement.prototype.onclick;
  export type FocusEvent = typeof HTMLElement.prototype.onfocus;
  export type BlurEvent = typeof HTMLElement.prototype.onblur;
  export type KeyupEvent = typeof HTMLElement.prototype.onkeyup;

  export type CustomChangeHandler<T> = ( event: CustomChangeEvent<T> ) => any;
  export type CustomChangeEvent<T> = CustomEvent & { detail: { value: T } };
