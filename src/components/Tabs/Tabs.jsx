import { h } from 'preact';
import { createClassName } from 'create-classname';

const tabsClass = createClassName('tabs')

const Tabs = ({children, ...props}) => (
  <div className={tabsClass(props)}>
    {children}
  </div>
);

Tabs.componentName = "Tabs";

export { Tabs };

