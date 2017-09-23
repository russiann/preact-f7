import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-text');

export const ItemText = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemText.propTypes = { children: PropTypes.any.isRequired };
