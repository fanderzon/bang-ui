import createElement from 'inferno-create-element';

import SideBar, { SideBarTabs } from './SideBar';
import Content from './Content';
import { TERTIARY_COLOR } from '../style';

let styles;

export default () => (
  <div style={styles.container}>
    <SideBar>
      <SideBarTabs />
    </SideBar>
    <Content />
  </div>
);

styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 9,
    background: TERTIARY_COLOR
  }
};
