import createElement from 'inferno-create-element';
import { SCREEN_SIZE, PRIMARY_COLOR, SECONDARY_COLOR } from '../style';

let styles;

export default ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

export const SideBarTabs = () => (
  <div style={styles.tabs}></div>
);

styles = {
  container: {
    width: '280px',
    flexGrow: 1,
    backgroundColor: SECONDARY_COLOR
  },
  tabs: {
    width: '50px',
    height: '100%',
    flexGrow: 1,
    backgroundColor: PRIMARY_COLOR
  }
};
