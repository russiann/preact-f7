import React, { Component } from 'react';
import { Page, Navbar, Button, Block, Toast, Segmented, Icon } from '../../dist/preact-f7';

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
          
          <Segmented>
            <Button raised onClick={() => this.setState({ toastBottom: true })}>Show Toast</Button>
            <Button raised onClick={() => this.setState({ toastBottom: false })}>Hide Toast</Button>
          </Segmented>
          <Toast 
            active={this.state.toastBottom} 
            message='Toast on Bottom' 
          />
          
          
          <Segmented>
            <Button raised onClick={() => this.setState({ toastBottom: true })}>Show Toast</Button>
            <Button raised onClick={() => this.setState({ toastBottom: false })}>Hide Toast</Button>
          </Segmented>
          <Toast 
            active={this.state.toastBottom} 
            position='bottom' 
            message='Toast on Bottom' 
          />
          
          <p>
            <Button raised onClick={() => this.setState({ toastTop: true })}> Toast on Top</Button>
            <Toast 
              active={this.state.toastTop} 
              position='top' 
              message='Toast on Top' 
              time={1000} 
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
              message='Complete'
              position='center'
              time={1500} 
              icon={<Icon ifIos="f7:star" ifMaterial="material:star" />}
              onClose={() => this.setState({ toastIcon: false })}
            />
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