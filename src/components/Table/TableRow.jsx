import { h } from 'preact';

export const TableRow = ({ children, className, style }) => (
  <tr className={className} style={style}>{children}</tr>
);