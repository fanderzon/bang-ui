import React from 'react';

import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default () => (
  <div style={styles.container}></div>
);

styles = {
  container: {
    width: '100%',
    flexGrow: 4,
    backgroundColor: TERTIARY_COLOR
  }
};
