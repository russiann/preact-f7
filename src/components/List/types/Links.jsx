import React from 'react';
import { Badge } from '../..';

const List = ({children}) => (
  <div className="list links-list">
    <ul>
      {children}
    </ul>
  </div>
);

const ListItem = ({children, text, link, badge}) => (
  <li>
    <a href={link}>
      {children || text}
      <If condition={badge}>
        <Badge >{badge}</Badge>
      </If>
    </a>
  </li>
);

export { List,  ListItem };