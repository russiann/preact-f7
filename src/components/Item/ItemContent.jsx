import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-content');

export const ItemContent = ({ children, ...props }) => (
  <li className={c(props)} {...props}>{children}</li>
);

ItemContent.propTypes = { children: PropTypes.any.isRequired };
