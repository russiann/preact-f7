import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-link');

export const ItemLink = ({ children, to, ...props }) => (
  <a href={to} className={c(props)} {...props}>{children}</a>
);

ItemLink.propTypes = { children: PropTypes.any.isRequired };
