import { h } from 'preact';

const ListGroup = ({children}) => (
  <div className="list-group">
    <ul>
      {children}
    </ul>
  </div>
);


export { ListGroup };