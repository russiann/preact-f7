import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const messageClass = createClassName('message', ['sent:message-sent', 'received:message-received']);

export const Message = ({ children, image, text, name, avatar, className, sent, received, ...props }) => (
  <div className={messageClass({ className, sent, received })} {...props}>
    <If condition={avatar}>
      <div className='message-avatar' style={{ backgroundImage: `url(${avatar})` }} />
    </If>
    <div className='message-content'>
      <If condition={name}>
        <div className='message-name'>{name}</div>
      </If>
      <div className='message-bubble'>
        <Choose>
          <When condition={image}>
            <div className="message-image">
              <Choose>
                <When condition={typeof image !== 'boolean'}>
                  <img src={image.src} alt={image.alt} style={{ width: '200px', height: '260px' }} />
                </When>
                <Otherwise>{children}</Otherwise>
              </Choose>
            </div>
          </When>
          <Otherwise>
            <div className='message-text'>
              <Choose>
                <When condition={text}>{text}</When>
                <When condition={!image && !text}>{children}</When>
              </Choose>
            </div>
          </Otherwise>
        </Choose>
      </div>
    </div>
  </div>
);

Message.propTypes = {
  text: PropTypes.string,
  sent: PropTypes.bool
};
