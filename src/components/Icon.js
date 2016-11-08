import React from 'react';

import { TERTIARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } from '../style';

let styles;

const Icon = ({image, link, size = 40, css}) => {
  return (
    <div style={ {
        ...styles.container,
        ...(image && {backgroundImage: `url(${image})`}),
        ...(!image && {backgroundColor: SECONDARY_COLOR}),
        ...(size && {width: `${size}px`, height: `${size}px`}),
        ...css} }
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
}

export default Icon;

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
