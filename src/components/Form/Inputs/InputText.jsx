import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

import { getInstance } from '../../../instance';

const labelClass = createClassName('item-title item-label', [
  'floatLabel:item-floating-label'
]);

const itemClass = createClassName('item-content item-input', [
  'info:item-input-with-info'
]);

class InputText extends Component {

  
  componentDidMount() {
    const Dom7 = getInstance().$;
    Dom7(this.input).on('change input', (e) => {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    })
  }
  
  render() {
    const { type, placeholder, label, media, children, value, info, ...props } = this.props;
    return (
      <li className={itemClass({info})}>

        <If condition={media}>
          <div className="item-media">{media}</div>
        </If>

        <div className="item-inner">

          <If condition={label} >
            <div className={labelClass(props)}>{label}</div>
          </If>
          
          <div className="item-input-wrap">
            <input ref={(node) => this.input = node} type={type} placeholder={placeholder} value={value} {...props} />
            <span className="input-clear-button"></span>
            <If condition={info}>
              <div class="item-input-info">{info}</div>
            </If>
          </div>
        </div>
      </li>
    );
  }
}

// const InputText = ({ type, placeholder, label, media, children, value, info, ...props }) => (
//   <li className={itemClass({info})}>

//     <If condition={media}>
//       <div className="item-media">{media}</div>
//     </If>

//     <div className="item-inner">

//       <If condition={label} >
//         <div className={labelClass(props)}>{label}</div>
//       </If>
      
//       <div className="item-input-wrap">
//         <input ref="input" type={type} placeholder={placeholder} value={value} {...props} />
//         <span className="input-clear-button"></span>
//         <If condition={info}>
//           <div class="item-input-info">{info}</div>
//         </If>
//       </div>
//     </div>
//   </li>
// );

export default InputText;