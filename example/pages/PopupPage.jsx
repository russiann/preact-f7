import { h, Component } from 'preact';
import { Page, Navbar, Button, Block, GridCol, Toast, Segmented, Icon, Preloader } from '../../dist/preact-f7';

class Popup extends Component{
  // instance = getInstance()
  show = null;
  $popup;

  componentWillUpdate({ active }) {
    if(this.$popup) {
      if(active) this.$popup.open();
      if(this.show) this.$popup.close();
    }

    this.show = active;
  }

  initPopup = ($element) => {
    setTimeout(() => {
      if($element) {
        const { active, onOpen, onOpened, onClose, onClosed } = this.props;

        this.$popup = window.instance.popup.create({ 
          content: $element,
          on: {
            open: onOpen,
            opened: onOpened,
            close: onClose,
            closed: onClosed
          }
        });

        if(active) {
          this.$popup.open();
          this.show = true;
        }
      }
    });
  }

  render = () => (
    <div className='popup' ref={this.initPopup}>
      {this.props.children}
    </div>
  );
}

Popup.componentName = 'Popup';

export default class PopupPage extends Component {

  constructor(){
    super();

    this.state = {
      activePopup: false
    };
  }

  render(){
    return (
      <Page>
        <Navbar title="Popup" />

        <div class="block">
          <p>Popup is a modal window with any HTML content that pops up over App's main content. Popup as all other overlays is part of so called "Temporary Views".</p>
          <p>
            <a href="#" class="button button-raised" onClick={() => this.setState({ activePopup: true })}>Open Popup</a>
          </p>
          <p>
            <a href="#" class="button button-raised" >Create Dynamic Popup</a>
          </p>
        </div>

        <Popup active={this.state.activePopup} onOpen={() => console.log('prop onOpen')} >
          <div class="page">
            <div class="navbar">
              <div class="navbar-inner">
                <div class="title">Popup Title</div>
                <div class="right"><a href="#" class="link" onClick={() => this.setState({ activePopup: false })}>Close</a></div>
              </div>
            </div>
            <div class="page-content">
              <div class="block">
                <p class="">Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
              </div>
            </div>
          </div>
        </Popup>
      </Page>
    );
  }
} 