import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-title');

export const ItemTitle = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemTitle.propTypes = { children: PropTypes.any.isRequired };
