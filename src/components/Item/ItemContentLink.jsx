import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-content item-link');

export const ItemContentLink = ({ children, to, ...props }) => (
  <a href={to} className={c(props)} {...props}>{children}</a>
);

ItemContentLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string
};
