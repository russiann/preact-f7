import React from 'react';
import PropTypes from 'prop-types';
// import { createClassName } from 'create-classname';

// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

export const Form = ({ children }) => (
  <div className="list inline-labels no-hairlines-md" >
    <ul>
      {children}
    </ul>
  </div>
);

