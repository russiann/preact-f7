import { h } from 'preact';

import { getDefaultClassName } from 'create-classname';

export const StatusBar = ({ children, className, ...props }) => {
  const classN = getDefaultClassName('statusbar-overlay', { className });
  
  return (
    <div className={classN} {...props}>{children}</div>
  );
}