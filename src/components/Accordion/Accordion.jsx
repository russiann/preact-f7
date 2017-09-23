import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const accordionClass = createClassName('list accordion-list', ['inset']);

export const Accordion = ({ children, className, inset, style }) => (
  <div className={accordionClass({ className, inset })} style={style}>
    <ul>{children}</ul>
  </div>
);

Accordion.propTypes = {
  children: PropTypes.any.isRequired,
  inset: PropTypes.bool
};
