
/**
 * On media change call callback with matches argument
 */
export function matchMedia( mediaQuery: string, callback: ( matches: boolean ) => void ): () => void {

  function handleOrientationChange( mql: MediaQueryList ) {

    callback( mql.matches );

  }

  const mql = window.matchMedia( mediaQuery );
  mql.addListener( handleOrientationChange );

  // Call manually to get initial state
  handleOrientationChange( mql );

  return () => {
    mql.removeListener( handleOrientationChange );
  };

}
