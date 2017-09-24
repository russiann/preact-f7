import React from 'react';
import { Page, Navbar, SubNavbar, List, ListItem, Block, Segmented, Button } from '../../dist/preact-f7';

const SubNavbars = () => (
  <Page withSubnavbar >
    <Navbar title="Subnavbar">
      <SubNavbar>
        <Segmented raised>
          <Button>Link 1</Button>
          <Button>Link 2</Button>
          <Button>Link 3</Button>
          </Segmented>
      </SubNavbar>
    </Navbar>

    <Block>
      <p>Subnavbar is useful when you need to put any additional elements into Navbar, like Tab Links or Search Bar. It also remains visible when Navbar hidden.</p>
    </Block>

    <List links>
      <ListItem text="Subnavbar Title" link="/subnavbar-title"/>
    </List>
  

  </Page>
);


export default SubNavbars;
