import { h, Component } from 'preact';

const View = ({children}) => (
  <div className="view view-main view-init" data-url="/">
    {children}
  </div>
);

export { View };