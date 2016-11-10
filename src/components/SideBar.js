import React from 'react';

import Icon from './Icon';
import { SCREEN_SIZE, PRIMARY_COLOR, SECONDARY_COLOR } from '../style';

let styles;

const SideBar = ({ children }) => {

  const onDown = e => {
    console.log('onDown sidebar', e);
  }

  const onClick = e => {
    console.log('onClick sidebar', e);
  }

  return (
    <div
      style={styles.container}
      onTouchStart={onDown}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default SideBar;

export const SideBarTabs = () => (
  <div style={styles.tabs}>
    <Icon css={styles.tabIcon} />
    <Icon css={styles.tabIcon} />
    <Icon css={styles.tabIcon} />
    <Icon css={styles.tabIcon} />
  </div>
);

styles = {
  container: {
    width: '280px',
    flexGrow: 1,
    zIndex: 1,
    backgroundColor: SECONDARY_COLOR,
    ...(SCREEN_SIZE.smartphone && {
      zIndex: 0,
      position: 'absolute',
      height: '100%',
      top: '52px',
      left: 0
    })
  },
  tabs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50px',
    height: '100%',
    flexGrow: 1,
    backgroundColor: PRIMARY_COLOR
  },
  tabIcon: {
    width: '42px',
    height: '42px',
    margin: '5px 0'
  }
};
