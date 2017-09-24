import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const gridRowClass = createClassName('row', ['noGap:no-gap']);

export const GridRow = ({ children, style, ...props }) => (
  <div className={gridRowClass(props)} style={style} >{children}</div>
);

GridRow.propTypes = {
  noGap: PropTypes.bool
};
