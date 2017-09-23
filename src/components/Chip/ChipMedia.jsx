import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const chipMediaClass = createClassName('chip-media', [
  { name: 'backgroundColor', className: ({ backgroundColor }) => `bg-color-${backgroundColor}`},
  { name: 'color', className: ({ color }) => `text-color-${color}`}
]);

export const ChipMedia = ({ children, backgroundColor, color, ...props }) => (
  <div className={chipMediaClass({ backgroundColor, color })} {...props}>
    {children}
  </div>
);

ChipMedia.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

