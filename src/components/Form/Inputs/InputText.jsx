import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const labelClass = createClassName('item-title item-label', [
  'floatLabel:item-floating-label'
]);

const itemClass = createClassName('item-content item-input', [
  'info:item-input-with-info'
]);

const InputText = ({ type, placeholder, label, media, children, value, info, ...props }) => (
  <li className={itemClass({info})}>

    <If condition={media}>
      <div className="item-media">{media}</div>
    </If>

    <div className="item-inner">

      <If condition={label} >
        <div className={labelClass(props)}>{label}</div>
      </If>
      
      <div className="item-input-wrap">
        <input type={type} placeholder={placeholder} value={value} {...props} />
        <span className="input-clear-button"></span>
        <If condition={info}>
          <div class="item-input-info">{info}</div>
        </If>
      </div>
    </div>
  </li>
);

export default InputText;