import React from 'react';

import { HEADER_TEXT_COLOR } from '../style';

let styles;

const Header = ({children}) => (
  <h1 style={styles.header}>
    {children}
  </h1>
);

export default Header;

styles = {
  header: {
    color: HEADER_TEXT_COLOR,
    fontSize: '24px'
  }
};
