import createElement from 'inferno-create-element';

import Icon from './Icon';
import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default () => (
  <div style={styles.container}>
    <Icon image="/static/os.png" link="http://theverge.com" size={40} />
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
