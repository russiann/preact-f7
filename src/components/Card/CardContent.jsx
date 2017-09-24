import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const cardContentClass = createClassName('card-content', ['padding:card-content-padding']);

export const CardContent = ({ children, ...props, style }) => (
  <div className={cardContentClass(props)} style={style} >{children}</div>
);

CardContent.propTypes = { children: PropTypes.any.isRequired };
