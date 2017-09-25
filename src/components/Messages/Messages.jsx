import{ h, Component } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

import { getInstance } from '../../instance.js';

const messagesClass = createClassName('messages');

export class Messages extends Component {
  constructor({ children, messagebar, title, ...restProps }) {
    super();

    this.children = children;
    this.messagebarProp = messagebar;
    this.title = title;
    this.restProps = restProps;
    this.instance = getInstance();
  }

  componentDidMount() {
    this.messages = this.instance.messages.create({
      el: this.instance.$('.messages'),
      firstMessageRule: (message, previousMessage, nextMessage) => {
        if (message.isTitle) return false;
        if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
        return false;
      },
      lastMessageRule: (message, previousMessage, nextMessage) => {
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
        return false;
      },
      tailMessageRule: (message, previousMessage, nextMessage) => {
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
        return false;
      }
    });

    if(this.messagebarProp) {
      // this.messagebar = this.instance.$('.messagebar')[1].remove();

      this.instance.messagebar.create({
        el: this.instance.$('.messagebar'),
        attachments: []
      });
    }
  }

  render() {
    return (
      <div className={messagesClass(this.restProps)} {...this.restProps}>
        <div className='messages-title'>
          <b>{this.title}</b>
        </div>
        {this.children}
      </div>
    );
  }
}

Messages.propTypes = {
  title: PropTypes.string
};
