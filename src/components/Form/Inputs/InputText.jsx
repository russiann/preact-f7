import React from 'react';
import PropTypes from 'prop-types';
// import { createClassName } from 'create-classname';
// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

const InputText = ({ type, placeholder, label, media, children, value, ...props }) => (
  <li className="item-content item-input">

    <If condition={media}>
      <div className="item-media">{media}</div>
    </If>

    <div className="item-inner">

      <If condition={label} >
        <div className="item-title item-label">{label}</div>
      </If>
      
      <div className="item-input-wrap">
        <input type={type} placeholder={placeholder} value={value} {...props} />
        <span className="input-clear-button"></span>
      </div>
    </div>
  </li>
);

export default InputText;