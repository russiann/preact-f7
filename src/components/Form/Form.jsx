import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const formClass = createClassName('list no-hairlines-md', [
  'inlineLabels:inline-labels',
  'inset',
]);

export const Form = ({ children, ...props }) => (
  <div className={formClass(props)} >
    <ul>
      {children}
    </ul>
  </div>
);

