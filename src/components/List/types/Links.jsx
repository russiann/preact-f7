import { h } from 'preact';
import { Badge } from '../..';

import { createClassName } from 'create-classname';

const aClass = createClassName('', ['closePanel:panel-close']);

const List = ({children}) => (
  <div className="list links-list">
    <ul>
      {children}
    </ul>
  </div>
);

const ListItem = ({children, text, link, badge, ...props}) => (
  <li>
    <a href={link} class={aClass(props)}>
      {text || children}
      <If condition={badge}>
        <Badge >{badge}</Badge>
      </If>
    </a>
  </li>
);

export { List,  ListItem };