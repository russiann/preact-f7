import { h } from 'preact';
import { Page, Navbar, Block, GridRow, Button, Segmented, List, ListItem } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Button" />

    <Block title='Usual Buttons' />
    <Block>
      <GridRow>
        <Button className='col'>Button</Button>
        <Button className='col'>Button</Button>
        <Button className='col' round>Button</Button>
      </GridRow>
    </Block>
    <Block title='Fill Buttons' />
    <Block>
      <GridRow>
        <Button className='col' fill>Button</Button>
        <Button className='col' fill>Button</Button>
        <Button className='col' fill round>Button</Button>
      </GridRow>
    </Block>

    <Block title='Outline Buttons (MD-theme only)' />
    <Block>
      <GridRow>
        <Button className='col' outline>Button</Button>
        <Button className='col' outline>Button</Button>
        <Button className='col' outline round>Button</Button>
      </GridRow>
    </Block>

    <Block title='Raised Buttons (MD-theme only)' />
    <Block>
      <p className="row">
        <Button className='col' raised>Button</Button>
        <Button className='col' raised fill>Button</Button>
        <Button className='col' outline raised>Button</Button>
      </p>
      <p className="row">
        <Button className='col' round raised>Button</Button>
        <Button className='col' fill round raised>Button</Button>
        <Button className='col' outline round raised>Button</Button>
      </p>
    </Block>

    <Block title='Segmented' />
    <Block>
      <Segmented raised>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button active>Active</Button>
      </Segmented>
      <Segmented>
        <Button outline>Button</Button>
        <Button outline>Button</Button>
        <Button outline active>Active</Button>
      </Segmented>
      <Segmented raised round>
        <Button round>Button</Button>
        <Button round>Button</Button>
        <Button round active>Active</Button>
      </Segmented>
      <Segmented round>
        <Button round outline>Button</Button>
        <Button round outline>Button</Button>
        <Button round outline active>Active</Button>
      </Segmented>
    </Block>

    <Block title='Big Buttons' />
    <Block>
      <p className="row">
        <Button className='col' big>Button</Button>
        <Button className='col' big fill>Button</Button>
      </p>
      <p className="row">
        <Button className='col' big raised>Button</Button>
        <Button className='col' big raised fill>Button</Button>
      </p>
    </Block>

    <Block title='Small Buttons' />
    <Block>
      <p className="row">
        <Button className='col' small>Button</Button>
        <Button className='col' small outline>Button</Button>
        <Button className='col' small fill>Button</Button>
      </p>
    </Block>

    <Block title='Color Buttons' />
    <Block>
      <p className="row">
        <Button className='col' color='red'>Red</Button>
        <Button className='col' color='pink'>Pink</Button>
        <Button className='col' color='purple'>Purple</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeppurple'>Deep Purple</Button>
        <Button className='col' color='indigo'>Indigo</Button>
        <Button className='col' color='blue'>Blue</Button>
      </p>
      <p className="row">
        <Button className='col' color='lightblue'>Light Blue</Button>
        <Button className='col' color='cyan'>Cyan</Button>
        <Button className='col' color='teal'>Teal</Button>
      </p>
      <p className="row">
        <Button className='col' color='green'>Green</Button>
        <Button className='col' color='lightgreen'>Light Green</Button>
        <Button className='col' color='lime'>Lime</Button>
      </p>
      <p className="row">
        <Button className='col' color='yellow'>Yellow</Button>
        <Button className='col' color='amber'>Amber</Button>
        <Button className='col' color='orange'>Orange</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeporange'>Deep Orange</Button>
        <Button className='col' color='brown'>Brown</Button>
        <Button className='col' color='gray'>Gray</Button>
      </p>
    </Block>

    <Block title='Color Fill Buttons' />
    <Block>
      <p className="row">
        <Button className='col' color='red' fill>Red</Button>
        <Button className='col' color='pink' fill>Pink</Button>
        <Button className='col' color='purple' fill>Purple</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeppurple' fill>Deep Purple</Button>
        <Button className='col' color='indigo' fill>Indigo</Button>
        <Button className='col' color='blue' fill>Blue</Button>
      </p>
      <p className="row">
        <Button className='col' color='lightblue' fill>Light Blue</Button>
        <Button className='col' color='cyan' fill>Cyan</Button>
        <Button className='col' color='teal' fill>Teal</Button>
      </p>
      <p className="row">
        <Button className='col' color='green' fill>Green</Button>
        <Button className='col' color='lightgreen' fill>Light Green</Button>
        <Button className='col' color='lime' fill>Lime</Button>            
      </p>
      <p className="row">
        <Button className='col' color='yellow' fill>Yellow</Button>
        <Button className='col' color='amber' fill>Amber</Button>
        <Button className='col' color='orange' fill>Orange</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeporange' fill>Deep Orange</Button>
        <Button className='col' color='brown' fill>Brown</Button>
        <Button className='col' color='gray' fill>Gray</Button>
      </p>
    </Block>

    <Block title='List-Block Buttons' />
    <List inset>
      <ListItem button>List Button 1</ListItem>
      <ListItem button>List Button 2</ListItem>
      <ListItem button>List Button 3</ListItem>
    </List>
    <List inset>
      <ListItem button color='red'>Big Red Button</ListItem>
    </List>
  </Page>  
);
