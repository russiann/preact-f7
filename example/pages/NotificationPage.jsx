import { h, Component } from 'preact';
import { Page, Navbar, Button, Block, Segmented, Icon, notification } from '../../dist/preact-f7';


export default class NotificationPage extends Component{
  render(){
    return (
      <Page>
        <Navbar title="Notification" />
        <Block>
          <p>Framework7 comes with simple Notifications component that allows you to show some useful messages to user and request basic actions.</p>
          
          <p>
            <Button raised onClick={() => notification({
              icon: '<i class="icon icon-f7"></i>',
              title: 'Framework7',
              titleRightText: 'now',
              subtitle: 'This is a subtitle',
              text: 'This is a simple notification message',
              closeTimeout: 3000,
            }).open()}>Full layout notification</Button>
          </p>
          <p>
            <Button raised onClick={() => notification({
              icon: <i className="icon icon-f7"></i>,
              title: 'Framework7',
              titleRightText: 'now',
              subtitle: 'This is a subtitle',
              text: 'This is a simple notification message',
              closeTimeout: 3000,
            }).open()}>Full layout notification</Button>
          </p>
          <p>
            <Button raised onClick={() => notification({
              icon: <Icon icon='icon-f7' />,
              title: 'Framework7',
              titleRightText: 'now',
              subtitle: 'This is a subtitle',
              text: 'This is a simple notification message',
              closeTimeout: 3000,
              on: { close: () =>  console.log('onClose') }
            }).open()}>Full layout notification</Button>
          </p>
          <p>
            <Button raised onClick={() => notification({
              icon: <Icon icon='icon-f7' />,
              title: 'Framework7',
              subtitle: 'Notification with close button',
              text: 'Click (x) button to close me',
              closeButton: true,
            }).open()}>With close button</Button>
          </p>
          <p>
            <Button raised onClick={() => notification({
              icon: <Icon icon='icon-f7' />,
              title: 'Framework7',
              titleRightText: 'now',
              subtitle: 'Notification with close on click',
              text: 'Click me to close',
              closeOnClick: true,
            }).open()}>Click to close</Button>
          </p>
          <p>
            <Button raised onClick={() => notification({
              icon: <Icon icon='icon-f7' />,
              title: 'Framework7',
              titleRightText: 'now',
              subtitle: 'Notification with close on click',
              text: 'Click me to close',
              closeOnClick: true,
              on: {
                close: () => console.log('onClose'),
              },
            }).open()}>Toast with large message</Button>
          </p>
        </Block>
      </Page>
    );
  }
} 