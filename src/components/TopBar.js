import createElement from 'inferno-create-element';
import { TERTIARY_COLOR, BORDER_COLOR } from '../style';

let styles;

export default () => (
  <div style={styles.container}></div>
);

styles = {
  container: {
    width: '100%',
    maxHeight: '50px',
    flexGrow: 1,
    backgroundColor: TERTIARY_COLOR,
    borderBottom: `2px solid ${BORDER_COLOR}`
  }
};
