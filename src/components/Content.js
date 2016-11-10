import React from 'react';
import { getInteractionEvents, getPointFromEvent } from '../util/event';

import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default ({menuWidth = 280}) => {
  let element = null;
  let menuPosition = 0;
  let events = getInteractionEvents();
  let css = {
    transform: 'perspective(500px) translate3d(0px,0px,0px)'
  };
  let startPosition = null;
  const listeners = {
    down: null,
    move: null,
    up: null
  };

  const clamp = (num, min, max) => {
    if (num > max) {
      return max;
    }
    if (num < min) {
      return min;
    }
    return num;
  };

  const updatePosition = position => element.style.transform = `perspective(500px) translate3d(${(position)}px,0px,0px)`;

  const setSwipePosition = (pos) => {
    if (!element) {
      console.log('no element mounted to position');
      return;
    }

    if (pos && startPosition) {
      let diff = pos.x - startPosition.x;
      let position = menuPosition + diff;
      updatePosition(clamp(position, 0, menuWidth));
    }
  }


  const onCreate = e => {
    element = e;
    document.addEventListener( events.down, onDown );
  }

  const onDestroy = e => {
    document.removeEventListener( events.down, onDown );
    document.removeEventListener( events.move, onMove );
    document.removeEventListener( events.up, onUp );
    element = null;
  }

  const onDown = e => {
    startPosition = getPointFromEvent(e);
    document.addEventListener( events.move, onMove );
    document.addEventListener( events.up, onUp );

  }

  const onMove = e => {
    const currentPos = getPointFromEvent(e);
    setSwipePosition(currentPos);
  }

  const onUp = e => {
    document.removeEventListener( events.move, onMove );
    document.removeEventListener( events.up, onUp );
    const currentPos = getPointFromEvent(e);
    const diff = currentPos.x - startPosition.x;
    const lastPosition = menuPosition + diff;
    let position = 0;
    if ((menuWidth - lastPosition) < lastPosition) {
      position = menuWidth;
    }
    menuPosition = position;
    updatePosition(position);
  }

  return (
    <div
      style={{ ...styles.container, ...css }}
      onAttached={onCreate}
      onWillDetach={onDestroy}
    >
      <p>Coooooontent</p>
    </div>
  );
}

styles = {
  container: {
    width: '100%',
    flexGrow: 4,
    zIndex: 1,
    backgroundColor: TERTIARY_COLOR,
    transition: 'transform 0.2s'
  }
};
