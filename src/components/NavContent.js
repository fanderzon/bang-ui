import React from 'react';

import Nav, { NavTabs, NavTab, NavMenu, NavSection, NavHeader, NavItem } from './Nav';
import Content from './Content';
import Header from './Header';
import { SCREEN_SIZE, TERTIARY_COLOR } from '../style';

let styles;

export default ({children}) => {
  let contentElement = null;
  let listeners = {
    down: null,
    move: null,
    up: null
  };

  const onCreate = (e) => {
    contentElement = e;
  };

  const onDestroy = (e) => {
    console.log('onDestroy', e);
    contentElement = null;
  };

  return (
    <div style={styles.container}>
      {children}
    </div>
  );
}

styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 9,
    background: TERTIARY_COLOR
  }
};
