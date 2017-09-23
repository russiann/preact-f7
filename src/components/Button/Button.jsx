import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';


const buttonClass = createClassName('button', [
  'active', 
  'round:button-round', 
  'big:button-big', 
  'fill:button-fill',
  'outline:button-outline',
  'small',
  'raised:button-raised',
  { name: 'color', className: ({ color }) => `color-${color}` },
  { name: 'ripple', className: ({ ripple }) => `ripple-${ripple}` }
]);

export const Button = ({ children, title, ...props, style }) => (
  <button className={buttonClass(props)} style={style}>{title || children}</button>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
