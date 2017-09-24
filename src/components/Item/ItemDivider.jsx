import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-divider');

export const ItemDivider = ({ children, ...props }) => (
  <li className={c(props)} {...props}>{children}</li>
);

ItemDivider.propTypes = { children: PropTypes.any.isRequired };
