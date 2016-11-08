import React from 'react';

import Icon from './Icon';
import { SCREEN_SIZE, PRIMARY_COLOR, SECONDARY_COLOR } from '../style';

let styles;

export default ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

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
    backgroundColor: SECONDARY_COLOR,
    ...(SCREEN_SIZE.smartphone && {
      width: '0px',
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
