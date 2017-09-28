import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const panelClass = createClassName('panel', [
  'left:panel-left', 'right:panel-right', 'cover:panel-cover', 'reveal:panel-reveal'
]);

export const Panel = ({ children, component, ...props }) => (
  <div class={panelClass(props)} {...props}>{component}</div>
);

Panel.propTypes = {
  component: PropTypes.node,
  left: PropTypes.bool,
  right: PropTypes.bool,
  cover: PropTypes.bool,
  reveal: PropTypes.bool
};
