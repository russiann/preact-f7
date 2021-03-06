import { h } from 'preact';
import { Page, Navbar, List, ListItem, Block } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Navbar" subtitle="Subtitle" right={<a class="link">Right</a>} />
    <Block>
      <p>Navbar is a fixed (with Fixed and Through layout types) area at the top of a screen that contains Page title and navigation elements.</p>
      <p>Navbar has 3 main parts: Left, Title and Right. Each part may contain any HTML content.</p>
    </Block>
   
    <List links>
      <ListItem text="Hide Navbar On Scroll" link="/hide-navbars-on-scroll"/>
    </List>
  </Page>
);
