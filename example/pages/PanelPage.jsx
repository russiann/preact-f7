import { h, Component } from 'preact';
import { Page, Navbar, Block, Panel, List, ListItem, GridCol, Button } from '../../dist/preact-f7';

export const LeftPanel = () => (
  <Page>
    <Block title='Left Panel' />
    <Block>
      <p>This is a left side panel. You can close it by clicking outsite or on this link: <a href="#" class="panel-close">close me</a>. You can put here anything, even another isolated view like in <a href="#" data-panel="right" class="panel-open">Right Panel</a></p>
    </Block>
    <Block title='Main View Navigation' />
    <List links>
      <ListItem link="/accordion" text="Accordion" />
      <ListItem link="/action-sheet" text="Action Sheet" />
      <ListItem link="/badge" text="Badge" />
      <ListItem link="/buttons" text="Buttons" />
      <ListItem link="/cards" text="Cards" />
      <ListItem link="/checkbox" text="Checkbox" badge="TODO" />
      <ListItem link="/chips" text="Chips / Tags" />
      <ListItem link="/contacts-list" text="Contacts List" badge="TODO" />
      <ListItem link="/data-table" text="Data Table" badge="TODO" />
    </List>
    <Block>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
      <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
    </Block>
  </Page>
);

export const RightPanel = () => (
  <Page>
    <Navbar title='Right Panel' />
    <Block>
      <p>This is a right side panel. You can close it by clicking outsite or on this link: <a href="#" class="panel-close">close me</a>. You can put here anything, even another isolated view.</p>
    </Block>
    <Block title='Panel Navigation' />
    <List links>
      <ListItem link="/panel-right-1/" text="Right panel page 1" />
      <ListItem link="/panel-right-2/" text="Right panel page 2" />
    </List>
  </Page>
);

export default () => (
  <Page>
    <Navbar title='Panel / Side panels' />
    <Block>
      <p>Framework7 comes with 2 panels (on left and on right), both are optional. They have two different layouts/effects - <b>cover</b> above the content (like left panel here) and <b>reveal</b> (like right panel). You can put absolutely anything inside: data lists, forms, custom content, and even other isolated app view (like in right panel now) with its own dynamic navbar. Checkout panels:</p>
    </Block>
    <Block row>
      <GridCol>
        <Button raised openPanel>Open left panel</Button>
      </GridCol>
      <GridCol>
        <Button raised openPanel='right'>Open right panel</Button>
      </GridCol>
    </Block>
  </Page>
);