import { h } from 'preact';
import { createClassName } from 'create-classname';

const tableClass = createClassName('data-table', ['card', 'init:data-table-init']);

export const Table = ({ children, className, card, init, style }) => (
  <div className={tableClass({ className, card, init })} style={style}>
    <table>{children}</table>
  </div>
);