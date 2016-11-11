import React from 'react';

import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default ({children}) => (
  <div style={styles.container}>
    {children}
  </div>
);

styles = {
  container: {
    display: 'flex',
    maxHeight: '50px',
    flexGrow: 1,
    backgroundColor: TERTIARY_COLOR,
    borderBottom: `2px solid ${BORDER_COLOR}`,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '5px',
  }
};
