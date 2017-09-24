import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, Block, Toolbar, Button } from '../../dist/preact-f7';

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
          <ListItem text="Tabbar" link="/subnavbar-title"/>
          <ListItem text="Tabbar With Labels" link="/subnavbar-title"/>
          <ListItem text="Tabbar Scrollable" link="/subnavbar-title"/>
          <ListItem text="Hide Toolbar On Scroll" link="/subnavbar-title"/>
        </List>
      
        <Block title="Toolbar Position" className="md-only"/>
        <Block className="md-only">
          <p>Material (MD) theme toolbar supports both top and bottom positions. Click the following button to change its position.</p>
          <p>
            <Button onClick={this.toggleToolbarPosition} title="TOGGLE TOOLBAR POSITION" raised />
          </p>
        </Block>
    
      </Page>
    )
  }
}


export default SubNavbarsContainer;
