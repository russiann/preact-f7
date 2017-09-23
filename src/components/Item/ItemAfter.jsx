import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-after');

export const ItemAfter = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemAfter.propTypes = { children: PropTypes.any.isRequired };
