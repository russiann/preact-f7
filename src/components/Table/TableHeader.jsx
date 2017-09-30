import { h } from 'preact';

export const TableHeader = ({ children, className, style }) => (
  <thead className={className} style={style}>{children}</thead>
);