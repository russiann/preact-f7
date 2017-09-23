import React from 'react';

const ListGroup = ({children}) => (
  <div className="list-group">
    <ul>
      {children}
    </ul>
  </div>
);


export { ListGroup };