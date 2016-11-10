export function getInteractionEvents( element ) {
  element = element || window; //eslint-disable-line

  if ( 'onpointerdown' in element ) {
    return {
      down: 'pointerdown',
      move: 'pointermove',
      up: 'pointerup',
      cancel: 'pointercancel'
    };
  }

  if ( 'onmspointerdown' in element ) {
    return {
      down: 'MSPointerDown',
      move: 'MSPointerMove',
      up: 'MSPointerUp',
      cancel: 'MSPointerCancel'
    };
  }

  if ( 'ontouchstart' in element ) {
    return {
      down: 'touchstart',
      move: 'touchmove',
      up: 'touchend',
      cancel: 'touchcancel'
    };
  }

  if ( 'onmousedown' in element ) {
    return {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
      cancel: null
    };
  }
  return {};
}

export function getPointFromEvent( e, property = 'page' ) {
  const touch = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : e;
  if ( touch[property + 'X'] ) {
    return { x: touch[property + 'X'], y: touch[property + 'Y'] };
  } else if ( touch.clientX ) {
    return { x: touch.clientX, y: touch.clientY };
  }
  return null;
}
