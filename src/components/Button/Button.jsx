import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const buttonClass = createClassName('button', [
  'active', 
  'round:button-round', 
  'big:button-big', 
  'fill:button-fill',
  'outline:button-outline',
  'small',
  'raised:button-raised',
  'openPanel:panel-open',
  { name: 'color', className: ({ color }) => `color-${color}` },
  { name: 'ripple', className: ({ ripple }) => `ripple-${ripple}` }
]);

const setupPanel = openPanel => {
  if (!['left', 'right'].includes(openPanel)) return {};
  return { ['data-panel']: openPanel };
}

export const Button = ({ children, title, openPanel, ...props, style, onClick }) => (
  <button
    className={buttonClass({ openPanel, ...props })}
    style={style}
    onClick={onClick}
    {...setupPanel(openPanel)}
  >
    {title || children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
