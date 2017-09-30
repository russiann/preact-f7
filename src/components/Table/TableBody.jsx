import { h } from 'preact';

export const TableBody = ({ children, className, style }) => (
  <tbody className={className} style={style}>{children}</tbody>
);