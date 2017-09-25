import { h } from 'preact';
import { createClassName } from 'create-classname';
import { Page } from '../';

const tabLinkClass = createClassName('tab-link', ['active:tab-link-active'])

const TabLink = ({label, tabId, children, ...props}) => (
  <a href={tabId} className={tabLinkClass(props)} >
    <Choose>
      <When condition={children.length > 0}>
        {children}
        <span className="tabbar-label">{label}</span>
      </When>
      <Otherwise>
        {label}
      </Otherwise>
    </Choose>
  </a>
);

export { TabLink };

