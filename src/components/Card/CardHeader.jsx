import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const cardHeaderClass = createClassName('card-header', ['noBorder:no-border']);

export const CardHeader = ({ children, valign, className, noBorder, style }) => (
  <div className={cardHeaderClass({ className, noBorder })} valign={valign} style={style} >
    {children}
  </div>
);

CardHeader.propTypes = { 
  children: PropTypes.any.isRequired
};
