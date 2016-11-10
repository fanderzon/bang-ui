import React from 'react';

import SideBar, { SideBarTabs, SideBarContent, SideBarSection, SideBarHeader, SideBarItem } from './SideBar';
import Content from './Content';
import Header from './Header';
import { SCREEN_SIZE, TERTIARY_COLOR } from '../style';

let styles;

console.log('SideBarContent');
console.log(SideBarContent);

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
        <SideBarContent>
          <SideBarSection>
            <SideBarHeader icon="/static/settings.png">Settings</SideBarHeader>
            <SideBarItem>Sub-Setting 1</SideBarItem>
            <SideBarItem>Sub-Setting 2</SideBarItem>
            <SideBarItem>Sub-Setting 3</SideBarItem>
          </SideBarSection>
          <SideBarSection>
            <SideBarHeader icon="/static/settings.png">Settings</SideBarHeader>
            <SideBarItem>Sub-Setting 1</SideBarItem>
            <SideBarItem>Sub-Setting 2</SideBarItem>
            <SideBarItem>Sub-Setting 3</SideBarItem>
          </SideBarSection>
        </SideBarContent>
      </SideBar>
      <Content>
        <Header>Title</Header>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec massa diam, accumsan non suscipit at,
          congue sollicitudin sapien. Vestibulum commodo augue ut erat lobortis,
          quis pharetra mi tincidunt. Nulla facilisi. Nunc quis quam a dui mollis tincidunt.
        </p>
      </Content>
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
