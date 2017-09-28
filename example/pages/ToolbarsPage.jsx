import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, Block, Toolbar, Button, ShowWhen } from '../../dist/preact-f7';

class SubNavbarsContainer extends Component {
  state = {
    toolbarOnBotton: false
  }

  toggleToolbarPosition = () => {
    this.setState({
      toolbarOnBotton: !this.state.toolbarOnBotton
    })
  }

  render() {
    return (
      <Page >
        
        <Navbar title="Toolbar & Tabbar"/>
        
        <Toolbar bottom={this.state.toolbarOnBotton}>
          <a className="link">Left Link</a>
          <a className="link">Right Link</a>
        </Toolbar>
    
        <List links>
          <ListItem text="Tabbar" link="/tabbar"/>
          <ListItem text="Tabbar With Labels" link="/tabbar-labels"/>
          <ListItem text="Tabbar Scrollable" link="/tabbar-scrollable"/>
          <ListItem text="Hide Toolbar On Scroll" link="/tabbar-hide-on-scroll"/>
        </List>
      
        <Block title="Toolbar Position" className="md-only"/>
        <ShowWhen theme="md">
          <Block>
            <p>Material (MD) theme toolbar supports both top and bottom positions. Click the following button to change its position.</p>
            <p>
              <Button onClick={this.toggleToolbarPosition} title="TOGGLE TOOLBAR POSITION" raised />
            </p>
          </Block>
        </ShowWhen>
    
      </Page>
    )
  }
}


export default SubNavbarsContainer;
