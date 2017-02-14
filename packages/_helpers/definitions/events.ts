export type ClickHandler = ( event: ClickEvent ) => any;
export type ClickEvent = typeof HTMLElement.prototype.onclick;
export type FocusHandler = ( event: FocusEvent ) => any;
export type FocusEvent = typeof HTMLElement.prototype.onfocus;
export type BlurHandler = ( event: BlurEvent ) => any;
export type BlurEvent = typeof HTMLElement.prototype.onblur;
export type KeyupHandler = ( event: KeyupEvent ) => any;
export type KeyupEvent= typeof HTMLElement.prototype.onkeyup;

export type CustomChangeHandler<T> = ( event: CustomChangeEvent<T> ) => any;
export type CustomChangeEvent<T> = CustomEvent & { detail: { value: T } };
