import React from 'react';

import SideBar, { SideBarTabs } from './SideBar';
import Content from './Content';
import { SCREEN_SIZE, TERTIARY_COLOR } from '../style';

let styles;

export default () => {
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
      <SideBar>
        <SideBarTabs />
      </SideBar>
      <Content />
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
