import { h, Component } from 'preact';
import { Block, Page, Navbar, MessageBar, MessageBarLeft, MessageBarRight, Messages, Message } from '../../dist/preact-f7';

export default class MessagesPage extends Component {
  date = (new Date()).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
  actualUser = { id: 1, name: 'Rogan Melo' };
  user1 = { id: 2, name: 'Kate', avatar: 'http://lorempixel.com/100/100/people/9' };
  user2 = { id: 3, name: 'Blue Ninja', avatar: 'http://lorempixel.com/100/100/people/7' };
  state = {
    messages: [{
      user: this.actualUser,
      text: 'Hi, Kate'
    }, {
      user: this.actualUser,
      text: 'How are you?'
    }, {
      user: this.user1,
      text: 'Hi, I am good!'
    }, {
      user: this.user2,
      text: 'Hi there, I am also fine, thanks! And how are you?'
    }, {
      user: this.actualUser,
      text: 'Hey, Blue Ninja! Glad to see you ;)'
    }, {
      user: this.actualUser,
      text: 'Hey, look, cutest kitten ever!'
    }, {
      user: this.actualUser,
      image: { src: 'http://lorempixel.com/200/260/cats/4/', alt: '4' }
    }, {
      user: this.actualUser,
      image: { src: 'http://lorempixel.com/200/260/cats/5/', alt: '5' }
    }, {
      user: this.user1,
      text: 'Nice!'
    }, {
      user: this.user1,
      text: 'Like it very much!'
    }, {
      user: this.user2,
      text: 'Awesome!'
    }]
  };

  camera() {
    console.log('open gallery');
  }

  send() {
    console.log(this.input.value);
    this.setState({ messages: [...this.state.messages, { user: this.actualUser, text: this.input.value }] });
    this.input.value = '';
  }

  render() {
    return (
      <Page messages>
        <Navbar title="Messsages" />
        <MessageBar onInit={(input) => this.input = input} placeholder='Message'>
          <MessageBarLeft>
            <a className="link icon-only" onClick={this.camera}>
              <i className="icon f7-icons ios-only">camera_fill</i>
              <i className="icon material-icons md-only">camera_alt</i>
            </a>
          </MessageBarLeft>
          <MessageBarRight>
            <a className="link icon-only" onClick={this.send.bind(this)}>
              <i className="icon f7-icons ios-only">arrow_up_fill</i>
              <i className="icon material-icons md-only">send</i>
            </a>
          </MessageBarRight>
        </MessageBar>
        <Messages messagebar title={this.date}>
          <For each='message' of={this.state.messages}>
            <Message
              key={JSON.stringify(message)}
              avatar={message.user.avatar}
              sent={message.user.id === this.actualUser.id}
              received={message.user.id !== this.actualUser.id}
              text={message.text}
              image={message.image}
            />
          </For>
        </Messages>
      </Page>
    );
  }
}

{/* <Message sent>Hi, Kate</Message>
<Message sent text='How are you?' />
<Message
  received
  name='Kate'
  avatar='http://lorempixel.com/100/100/people/9'
>
  Hi, I am good!
        </Message>
<Message
  received
  name='Blue Ninja'
  avatar='http://lorempixel.com/100/100/people/7'
  text='Hi there, I am also fine, thanks! And how are you?'
/>
<Message sent>Hey, Blue Ninja! Glad to see you ;)</Message>
<Message sent>Hey, look, cutest kitten ever!</Message>
<Message sent image={{ src: 'http://lorempixel.com/200/260/cats/4/', alt: '4' }} />
<Message image sent>
  <img src='http://lorempixel.com/200/260/cats/5/' alt='5' style={{ width: '200px', height: '260px' }} />
</Message>
<Message
  received
  name='Kate'
  avatar='http://lorempixel.com/100/100/people/9'
  text='Nice!'
/>
<Message
  received
  name='Kate'
  avatar='http://lorempixel.com/100/100/people/9'
  text='Like it very much!'
/>
<Message
  received
  name='Blue Ninja'
  avatar='http://lorempixel.com/100/100/people/7'
  text='Awesome!'
/> */}