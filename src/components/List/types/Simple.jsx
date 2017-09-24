import { h } from 'preact';

const List = ({children}) => (
  <div className="list simple-list">
    <ul>
      {children}
    </ul>
  </div>
);

const ListItem = ({children, text, link}) => (
  <li>{text || children}</li>
);

export { List,  ListItem };