import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const cardClass = createClassName('card');

export const Card = ({ children, className, style }) => (
  <div className={cardClass({ className })} style={style}>{children}</div>
);

Card.propTypes = { children: PropTypes.any.isRequired };
