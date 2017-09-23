import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-subtitle');

export const ItemSubtitle = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemSubtitle.propTypes = { children: PropTypes.any.isRequired };
