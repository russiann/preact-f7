import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const fabClass = createClassName('fab', [
  { name: 'position', className: ({ position }) => `fab-${position}` }
]);

export const Fab = ({ children, ...props }) => (
  <div className={fabClass(props)} {...props}>
    {children}
  </div>
);

Fab.propTypes = {
  children: PropTypes.any
}
  
