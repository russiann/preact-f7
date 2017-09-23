import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-inner');

export const ItemInner = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemInner.propTypes = { children: PropTypes.any.isRequired };
