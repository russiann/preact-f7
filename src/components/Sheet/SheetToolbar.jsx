import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const sheetToolbarClass = createClassName('toolbar');

export const SheetToolbar = ({ left, right, ...props }) => (
  <div className={sheetToolbarClass(props)} {...props}>
    <div className="toolbar-inner">
      <div className="left">
        {left}
      </div>
      <div className="right">
        {right}
      </div>
    </div>
  </div>
);

SheetToolbar.componentName = 'SheetToolbar';

SheetToolbar.propTypes = {
  children: PropTypes.any.isRequired,
  inset: PropTypes.bool
};
