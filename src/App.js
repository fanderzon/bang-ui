import React from 'react';

import TopBar from './components/TopBar';
import Main from './components/Main';

let styles;

export default ({children}) => (
  <div style={styles.container}>
    <TopBar />
    <Main />
  </div>
);

styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  }
};
