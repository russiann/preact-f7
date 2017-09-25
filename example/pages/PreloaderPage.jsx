import { h, Component } from 'preact';
import { Page, Navbar, Button, Block, GridCol, Toast, Segmented, Icon, Preloader } from '../../dist/preact-f7';

export default class PreloaderPage extends Component {

  constructor(){
    super();

    this.state = {
      smallIndicator: false,
      dialog: false,
      dialogText: false
    };
  }

  render(){
    return (
      <Page>
        <Navbar title="Preloader" />

        <Block>
          <p>How about an activity indicator? Framework 7 has a nice one. The F7 Preloader is made with SVG and animated with CSS so it can be easily resized.</p>
        </Block>
        <Block title='Default' />
        <Block row={true} className='demo-preloaders align-items-stretch text-align-center'>
          <GridCol width={25}>
            <Preloader />
          </GridCol>
          <GridCol width={25} className='demo-black-col'>
            <Preloader color='white'/>
          </GridCol>
          <GridCol width={25}>
            <Preloader big={true}/>
          </GridCol>
          <GridCol width={25} className='demo-black-col'>
            <Preloader big={true} color='white'/>
          </GridCol>
        </Block>
        <Block title='Color Preloaders' />
        <Block row className='text-align-center'>
          <GridCol>
            <Preloader color='red' />
          </GridCol>
          <GridCol>
            <Preloader color='green' />
          </GridCol>
          <GridCol>
            <Preloader color='orange' />
          </GridCol>
          <GridCol>
            <Preloader color='blue' />
          </GridCol>
        </Block>
        <Block title='Multi-color (MD-theme only)' />
        <Block className='text-align-center'>
          <Preloader color='multi' />
        </Block>
        <Block title='Preloader Modals' />
        <Block>
          <p>With <b>{`<Preloader active={this.state.actived} />`}</b> you can show small overlay with preloader indicator.</p>
          <p>
            <a className="button button-raised" onClick={() => {
                this.setState({ smallIndicator: true });
                setTimeout(() => this.setState({ smallIndicator: false }), 2000);
            }}>
              Open Small Indicator
            </a>

            <Preloader active={this.state.smallIndicator} />
          </p>
          <p>With <b>{`<Preloader active={this.state.actived} dialog />`}</b> you can show dialog modal with preloader indicator.</p>
          <p>
            <a className="button button-raised" onClick={() => {
                this.setState({ dialog: true });
                setTimeout(() => this.setState({ dialog: false }), 2000);
            }}>Open Dialog Preloader</a>

            <Preloader active={this.state.dialog} dialog />
          </p>
          <p>With <b>{`<Preloader active={this.state.actived} dialog tex="Saving..."/>`}</b> you can show dialog preloader modal with custom title.</p>
          <p>
            <a className="button button-raised" onClick={() => {
                this.setState({ dialogText: true });
                setTimeout(() => this.setState({ dialogText: false }), 2000);
            }}>Open Dialog Preloader</a>

            <Preloader active={this.state.dialogText} dialog text='Saving...' />
          </p>
        </Block>
      </Page>
    );
  }
} 