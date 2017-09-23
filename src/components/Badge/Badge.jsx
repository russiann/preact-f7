import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

export const Badge = ({ children, className, style, color, text }) => (
  <span className={badgeClass({ className, color })} style={style}>{text || children}</span>
);

Badge.propTypes = { children: PropTypes.any.isRequired };
