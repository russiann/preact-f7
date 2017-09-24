import { h } from 'preact';

import { createClassName } from 'create-classname';

const mapping = [
  { verifier: 'color', className: ({ color }) => `preloader-${color}` }
];

export const Preloader = ({ children, className, width, height, style , ...props }) => {
  const classN = createClassName('preloader', { className, ...props }, mapping);
  const styles = Object.assign({ width, height }, style );

  return (
    <span className={classN} {...props} style={styles}>{children}</span>
  );
}