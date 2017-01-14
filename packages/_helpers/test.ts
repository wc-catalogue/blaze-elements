export function makeMouseEvent(element: HTMLElement, eventType: string ) {

  const evObj = document.createEvent( 'Events' );
  evObj.initEvent( eventType, true, false);
  element.dispatchEvent(evObj);

}

export const click = ( element: HTMLElement) => makeMouseEvent( element, 'click' );
