import { h } from 'preact';
import { createClassName } from 'create-classname';
import { Page } from '../';

const tabClass = createClassName('page-content tab', ['active:tab-active'])

const Tab = ({children, ...props}) => (
  <div className={tabClass(props)} {...props} >
    {children}
  </div>
);

export { Tab };

