import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const blockHeader = createClassName('block-header');

export const BlockHeader = ({ children, text, style, className }) => (
  <div className={blockHeader({className})} style={style} >
    {text || children}
  </div>
);

BlockHeader.propTypes = { title: PropTypes.string };
