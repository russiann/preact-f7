import React from 'react';

const List = ({children}) => (
  <div className="list simple-list">
    <ul>
      {children}
    </ul>
  </div>
);

const ListItem = ({children, text, link}) => (
  <li>{children || text}</li>
);

export { List,  ListItem };