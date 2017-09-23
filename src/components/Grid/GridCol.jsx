import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const gridColClass = createClassName('col', [
  { name: 'width', className: ({ width }) => `col-${width}` },
  { name: 'tablet', className: ({ tablet }) => `tablet-${tablet}`}
]);

export const GridCol = ({ children, ...props, style }) => (
  <div className={gridColClass(props)} style={style}>{children}</div>
);

GridCol.propTypes = {
  width: PropTypes.number,
  tablet: PropTypes.number
};