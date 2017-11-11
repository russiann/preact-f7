import { h, Component } from 'preact';
// import { createClassName } from 'create-classname';
// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);

import { getInstance } from '../../../instance';

class Range extends Component {
  
  componentDidMount() {
    const Dom7 = getInstance().$;
    Dom7(this.input).on('change input', (e) => {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    })
  }

  render() {
    const { type, placeholder, label, media, onChange, ...props } = this.props;

    return (
      <li className="item-content item-input">
      
        <If condition={media}>
          <div className="item-media">{media}</div>
        </If>
    
        <div className="item-inner">
    
          <If condition={label} >
            <div className="item-title item-label">{label}</div>
          </If>
    
          <div className="item-input-wrap">
    
            <div className="range-slider range-slider-init" data-label="true">
              <input ref={(node) => this.input = node} type="range" {...props} />
            </div>
          </div>
        </div>
      </li>
    )
  }

}

// const InputText = ({ type, placeholder, label, media, ...props }) => (
//   <li className="item-content item-input">
    
//     <If condition={media}>
//       <div className="item-media">{media}</div>
//     </If>

//     <div className="item-inner">

//       <If condition={label} >
//         <div className="item-title item-label">{label}</div>
//       </If>

//       <div className="item-input-wrap">

//         <div className="range-slider range-slider-init" data-label="true">
//           <input type="range" {...props} />
//         </div>
//       </div>
//     </div>
//   </li>
// );

export default Range;