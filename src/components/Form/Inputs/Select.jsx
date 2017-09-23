import React from 'react';
// import { createClassName } from 'create-classname';
// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

const InputText = ({ type, placeholder, label, media, children, value }) => (
  <li className="item-content item-input">
    
    <If condition={media}>
      <div className="item-media">{media}</div>
    </If>

    <div className="item-inner">

      <If condition={label} >
        <div className="item-title item-label">{label}</div>
      </If>

      <div className="item-input-wrap">
        <select placeholder={placeholder}>
          {children}
        </select>
      </div>
    </div>
  </li>
);

export default InputText;