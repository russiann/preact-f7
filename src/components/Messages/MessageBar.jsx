import { h, Component } from 'preact';
import { createClassName } from 'create-classname';

import { getInstance } from '../../instance.js';

const messageBarClass = createClassName('toolbar messagebar toolbar-bottom-md')

export class MessageBar extends Component {
  constructor({ children, placeholder, style, onCameraClick, onSendClick, ...restProps }) {
    super();

    this.children = children;
    this.placeholder = placeholder;
    this.onCameraClick = onCameraClick;
    this.onSendClick = onSendClick;
    this.style = style;
    this.restProps = restProps;
    this.instance = getInstance();
  }

  send() {
    if(this.textInput.value) {
      this.onSendClick(this.textInput.value);
      this.instance.messages.get('.messages').addMessages([{ text: this.textInput.value }]);
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <div className={messageBarClass(this.restProps)} style={{ position: 'fixed', ...this.style }} {...this.restProps}>
        <div className="toolbar-inner">
          <a className="link icon-only" onClick={this.onCameraClick}>
            <i className="icon f7-icons ios-only">camera_fill</i>
            <i className="icon material-icons md-only">camera_alt</i>
          </a>
          <div className="messagebar-area">
            <textarea
              className="resizable"
              placeholder={this.placeholder}
              ref={textarea => this.textInput = textarea}
            />
          </div>
          <a className="link icon-only" onClick={this.send.bind(this)}>
            <i className="icon f7-icons ios-only">arrow_up_fill</i>
            <i className="icon material-icons md-only">send</i>
          </a>
        </div>
      </div>
    );
  }
}