import React from 'react';

import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default ({image, link, size, style}) => (
  <div style={ {
      ...styles.container,
      ...(image && {backgroundImage: `url(${image})`}),
      ...(size && {width: `${size}px`, height: `${size}px`}),
      ...style} }
  >
    {
      link && (
        <a
          style={styles.link}
          href={link}
        > </a>
      )
    }
  </div>
);

styles = {
  container: {
    position: 'relative',
    width: '50px',
    height: '50px',
    borderRadius: '15%',
    backgroundSize: 'cover',
  },
  link: {
    display: 'block',
    width: '100%',
    height: '100%',
  }
};
