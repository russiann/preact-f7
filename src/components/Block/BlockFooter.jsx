import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const blockFooter = createClassName('block-footer');

export const BlockFooter = ({ children, text, style, className }) => (
  <div className={blockFooter({className})} style={style} >
    {text || children}
  </div>
);

BlockFooter.propTypes = { title: PropTypes.string };
