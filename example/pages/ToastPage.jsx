import { h, Component } from 'preact';
import { Page, Navbar, Button, Block, Toast, Segmented, Icon, toast } from '../../dist/preact-f7';

export default class ToastPage extends Component{

  constructor(){
    super();

    this.state = { 
      toastBottom: false,
      toastTop: false,
      toastCenter: false,
      toastIcon: false,
      toastLargeMessage: false,
      toastCloseButton: false,
      toastCustomButton: false
    };
  }

  render(){
    return (
      <Page>
        <Navbar title="Toast" />
        <Block>
          <p>Toasts provide brief feedback about an operation through a message on the screen.</p>
          
          <p>
            <Button raised onClick={() => toast({
              text: 'Toast on Top',
              position: 'bottom',
              closeTimeout: 1000,
              on: { close: () => console.log('onClose') }
            }).open()}>Toast on Bottom</Button>
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastTop: true })}> Toast on Top</Button>
            <Toast 
              active={this.state.toastTop} 
              position='top' 
              message='Toast on Top' 
              onClose={() => this.setState({ toastTop: false })}
            />
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastCenter: true })}>Toast on Center</Button>
            <Toast 
              active={this.state.toastCenter} 
              position='center' 
              message='Toast on Center' 
              time={1000} 
              onClose={() => this.setState({ toastCenter: false })}
            />
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastIcon: true })}>Toast with icon</Button>
            <Toast 
              active={this.state.toastIcon}  
              message="I'm with icon"
              position='center'
              time={1500} 
              icon={<Icon ifIos="f7:star" ifMaterial="material:star" />}
              onClose={() => this.setState({ toastIcon: false })}
            />
          </p>
          <p>
            <Button raised onClick={() => toast({
              closeTimeout: 1000,
              text: "I'm with icon",
              position: 'center',
              icon: <Icon ifIos="f7:star" ifMaterial="material:star" />
            }).open()}>Toast with icon</Button>
          </p>
          <p>
            <Button raised onClick={() => toast({
              closeTimeout: 1000,
              text: "I'm with icon",
              position: 'center',
              icon: '<i class="icon f7-icons">star</i>'
            }).open()}>Toast with icon</Button>
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastLargeMessage: true })}>Toast with large message</Button>
            <Toast 
              active={this.state.toastLargeMessage}  
              message='This toast contains a lot of text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae, ab. Delectus amet optio facere autem sapiente quisquam beatae culpa dolore.' 
              time={1000} 
              onClose={() => this.setState({ toastLargeMessage: false })}
            />
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastCloseButton: true })}>Toast with close button</Button>
            <Toast 
              active={this.state.toastCloseButton}  
              message='Toast with close button' 
              buttonText='OK'
              onClose={() => this.setState({ toastCloseButton: false })}
            />
          </p>
          <p>
            <Button raised onClick={() => this.setState({ toastCustomButton: true })}>Toast with custom button</Button>
            <Toast 
              active={this.state.toastCustomButton}  
              message='Toast with close button' 
              buttonText='DELETE'
              buttonColor='red'
              onClose={() => this.setState({ toastCustomButton: false })}
            />
          </p>
        </Block>
      </Page>
    );
  }
} 