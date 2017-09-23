import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const cardFooterClass = createClassName('card-footer', ['noBorder:no-border']);

export const CardFooter = ({ children, ...props, style } ) => (
  <div className={cardFooterClass(props)} style={style} >{children}</div>
);

CardFooter.propTypes = { 
  children: PropTypes.any.isRequired
};
