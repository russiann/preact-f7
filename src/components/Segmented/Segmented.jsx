import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const segmentedClass = createClassName('segmented', ['raised:segmented-raised','round:segmented-round']);

export const Segmented = ({ children, className, raised, round }) => (
  <div className={segmentedClass({ className, raised, round })}>{children}</div>
);

Segmented.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
  round: PropTypes.bool
};
