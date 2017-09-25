import { h, Component } from 'preact';
import { createClassName } from 'create-classname';

import { getInstance } from '../../instance.js';

const messageBarClass = createClassName('toolbar messagebar toolbar-bottom-md');

export const MessageBarLeft = ({ children }) => children;
export const MessageBarRight = ({ children }) => children;
MessageBarLeft.componentName = 'MessageBarLeft';
MessageBarRight.componentName = 'MessageBarRight';

export class MessageBar extends Component {
  constructor({ onInit, placeholder, style, ...restProps }) {
    super();

    this.onInit = onInit;
    this.placeholder = placeholder;
    this.style = style;
    this.restProps = restProps;
    this.instance = getInstance();
  }

  componentDidMount() {
    this.onInit(this.textInput);
  }

  // send = () => {
  //   if(this.textInput.value) {
  //     // this.onSendClick(this.textInput.value);
  //     this.instance.messages.get('.messages').addMessages([{ text: this.textInput.value }]);
  //     this.textInput.value = '';
  //   }
  // }

  render() {
    return (
      <div className={messageBarClass(this.restProps)} style={{ position: 'fixed', ...this.style }} {...this.restProps}>
        <div className="toolbar-inner">
          {this.props.children.map(child => {
            if(child && child.nodeName && child.nodeName.componentName === 'MessageBarLeft') return child.children;
            return;
          })}
          <div className="messagebar-area">
            <textarea
              className="resizable"
              placeholder={this.placeholder}
              ref={textarea => this.textInput = textarea}
            />
          </div>
          {this.props.children.map(child => {
            if(child && child.nodeName && child.nodeName.componentName === 'MessageBarRight') return child.children;
            return;
          })}
        </div>
      </div>
    );
  }
}