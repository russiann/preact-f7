import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const labelClass = createClassName('item-title item-label', [
  'floatLabel:item-floating-label'
]);

const TextArea = ({ type, placeholder, label, media, children, value, resizable, ...props }) => (
  <li className="item-content item-input">

    <If condition={media}>
      <div className="item-media">{media}</div>
    </If>

    <div className="item-inner">

      <If condition={label} >
        <div className={labelClass(props)}>{label}</div>
      </If>
      
      <div className="item-input-wrap">
        <textarea class={resizable ? 'resizable' : null} placeholder={placeholder} value={value} {...props}></textarea>
      </div>
    </div>
  </li>
);

export default TextArea;