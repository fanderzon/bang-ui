import React from 'react';

import Icon from './Icon';
import {
  SCREEN_SIZE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR
} from '../style';

let styles;

const Nav = ({ children }) => {

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

export default Nav;

export const NavMenu = ({children}) => (
  <div style={styles.content}>
    {children}
  </div>
);

export const NavTabs = ({children}) => (
  <div style={styles.tabs}>
    {children}
  </div>
);

export const NavTab = ({image, link}) => (
  <Icon css={styles.tabIcon} image={image} link={link}  />
);

export const NavSection = ({children}) => (
  <div style={styles.section}>
    {children}
  </div>
);

export const NavHeader = ({icon = null, action = () => null, children}) => (
  <div style={styles.header} onClick={action}>
    <div style={styles.headerIconContainer}>
      {
        icon && (
          <img src={icon} style={styles.headerIcon} />
        )
      }
    </div>
    {children}
  </div>
);

export const NavItem = ({action = () => null, children}) => (
  <div style={styles.item} onClick={action}>
    <div style={styles.headerIconContainer}></div>
    {children}
  </div>
);

styles = {
  container: {
    width: '280px',
    display: 'flex',
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
  },
  content: {
    width: '200px',
    flexGrow: 2
  },
  section: {
    position: 'relative',
    padding: '15px 0px'
  },
  header: {
    color: PRIMARY_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px'
  },
  item: {
    color: SECONDARY_TEXT_COLOR,
    fontWeight: 'normal',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px'
  },
  headerIconContainer: {
    width: '30px',
    padding: '0px 5px 0px 5px'
  },
  headerIcon: {
    width: '16px',
    height: '16px'
  }
};
