import { h } from 'preact';
// import { createClassName } from 'create-classname';
// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

const InputText = ({ type, placeholder, label, media, children, ...props }) => (
  <li className="item-content item-input">
    
    <If condition={media}>
      <div className="item-media">{media}</div>
    </If>

    <div className="item-inner">

      <If condition={label} >
        <div className="item-title item-label">{label}</div>
      </If>

      <div className="item-input-wrap">
        <select placeholder={placeholder} {...props}>
          {children}
        </select>
      </div>
    </div>
  </li>
);

export const Select = InputText;

export default InputText;