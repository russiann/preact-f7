import React from 'react';
import PropTypes from 'prop-types';

export const FabItem = ({ children, ...props }) => (
  <a {...props}>
    {children}
  </a>
);

FabItem.propTypes = {
  children: PropTypes.any
}
  
