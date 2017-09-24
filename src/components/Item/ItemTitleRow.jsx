import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-title-row');

export const ItemTitleRow = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemTitleRow.propTypes = { children: PropTypes.any.isRequired };
