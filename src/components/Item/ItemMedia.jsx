import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const c = createClassName('item-media');

export const ItemMedia = ({ children, ...props }) => (
  <div className={c(props)} {...props}>{children}</div>
);

ItemMedia.propTypes = { children: PropTypes.any.isRequired };
