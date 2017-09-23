import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';


const align = (props) => {
  let position = `fab-buttons-top`
  if(props.left)   position = `fab-buttons-left`;
  if(props.right)  position = `fab-buttons-right`;
  if(props.bottom) position = `fab-buttons-bottom`;
  if(props.top)    position = `fab-buttons-top`;
  if(props.center) position = `fab-buttons-center`;

  return position;
}
const fabButtons = createClassName('fab-buttons', [
  { name: 'left',   className: align },
  { name: 'bottom', className: align },
  { name: 'right',  className: align },
  { name: 'top',    className: align },
  { name: 'center', className: align }
]);

export const FabButtons = ({ children, ...props }) => (
  <div className={fabButtons(props)} {...props}>
    {children}
  </div>
);

FabButtons.propTypes = {
  children: PropTypes.any
}
  
