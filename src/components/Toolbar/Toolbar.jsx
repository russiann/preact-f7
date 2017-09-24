import { h } from 'preact';
import { createClassName } from 'create-classname';

const toolbar = createClassName('toolbar', ['bottom:toolbar-bottom-md', 'tabbar', 'labels:tabbar-labels'])

const Toolbar = ({children, ...props}) => (
  <div className={toolbar(props)}>
    <div className="toolbar-inner">
      {children}
    </div>
  </div>
);

export { Toolbar };

