import { h } from 'preact';
import PropTypes from 'prop-types';

export const FabIcon = ({ children, ...props }) => (
  <a {...props}>
    {children}
  </a>
);

FabIcon.propTypes = {
  children: PropTypes.any
}
  
