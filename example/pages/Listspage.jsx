import { h } from 'preact';
import { Page, Navbar, List, ListItem, ListGroup, BlockFooter, Block } from '../../dist/preact-f7';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.";

export default () => (
  <Page>
    <Navbar title="List View" />
    <Block>
      <p>Framework7 allows you to be flexible with list views (table views). You can make them as navigation menus, you can use there icons, inputs, and any elements inside of the list, and even make them nested:</p>
    </Block>

    <Block title>Simple List</Block>
    <List simple >
      <ListItem text="Item 1" />
      <ListItem text="Item 2" />
      <ListItem text="Item 3" />
    </List>

    <Block title>Links List</Block>
    <List links>
      <ListItem link="#" text="Item 1" />
      <ListItem link="#" text="Item 2" />
      <ListItem link="#" text="Item 3" />
    </List>

    <Block title>Data list, with icons</Block>
    <List>
      <ListItem title="Ivan Petrov" after="CEO" />
      <ListItem title="John Doe" after="Cleaner" />
      <ListItem title="Jenna Smith" />
    </List>

    <Block title>Links, Header, Icons</Block>
    <List>
      <ListItem link="#" title="Name" text="John Doe" after="Edit" />
      <ListItem link="#" title="Phone" text="+7 90 111-22-3344" after="Edit" />
      <ListItem link="#" title="Email" text="john@doe" footer="Home" after="Edit" />
      <ListItem link="#" title="Email" text="john@framework7" footer="Work" after="Edit" />
    </List>

    <Block title>Links, no Icons</Block>
    <List>
      <ListItem link="#" title="Ivan Petrov" />
      <ListItem link="#" title="John Doe" />
      <ListItem divider title="Divider Here" />
      <ListItem link="#" title="Ivan Petrov" />
      <ListItem link="#" title="Jenna Smith" />
    </List>

    <Block title>Grouped with Sticky Titles</Block>
    <List grouped>
      <ListGroup>
        <ListItem groupTitle title="A" />
        <ListItem title="Aaron" />
        <ListItem title="Abbie" />
        <ListItem title="Adam" />
      </ListGroup>
      <ListGroup>
        <ListItem groupTitle title="B" />
        <ListItem title="Bailey" />
        <ListItem title="Barclay" />
        <ListItem title="Bartolo" />
      </ListGroup>
      <ListGroup>
        <ListItem groupTitle title="C" />
        <ListItem title="Caiden" />
        <ListItem title="Calvin" />
        <ListItem title="Candy" />
      </ListGroup>
    </List>

    <Block title>Mixed and Nested</Block>
    <List>
      <ListItem link="#" title="Ivan Petrov" after="CEO" />
      <ListItem link="#" title="Two icons here" />
      <ListItem title="No icons here" >
        <List nested>
          <ListItem link="#" title="Ivan Petrov" after="CEO" />
          <ListItem link="#" title="Two icons here" />
          <ListItem title="No icons here" />
          <ListItem link="#" title="Ultra long text goes here, no, it is really really long" />
          <ListItem title="With toggle" />
        </List>  
      </ListItem>
      <ListItem link="#" title="Ultra long text goes here, no, it is really really long" />
      <ListItem title="With toggle" />
    </List>

    <Block title>Mixed, Inset</Block>
    <List inset>
      <ListItem link="#" title="Ivan Petrov" after="CEO" />
      <ListItem link="#" title="Two icons here" />
      <ListItem link="#" title="Ultra long text goes here, no, it is really really long" />
      <ListItem title="With toggle" />
    </List>
    <BlockFooter>
      <p>Here comes some useful information about list above</p>
    </BlockFooter>

    <Block title>Mixed, Tablet Inset</Block>
    <List tabletInset>
      <ListItem link="#" title="Ivan Petrov" after="CEO" />
      <ListItem link="#" title="Two icons here" />
      <ListItem link="#" title="Ultra long text goes here, no, it is really really long" />
      <ListItem title="With toggle" />
    </List>
    <BlockFooter>
      <p>This list block will look like "inset" only on tablets (iPad)</p>
    </BlockFooter>

    <Block title>Mixed, Tablet Inset</Block>
    <Block>
      <p>Media Lists are almost the same as Data Lists, but with a more flexible layout for visualization of more complex data, like products, services, userc, etc.</p>
    </Block>

    <Block title>Songs</Block>
    <List mediaList>
      <ListItem
        media={<img src="http://lorempixel.com/160/160/people/1" alt="" width="80" />}
        link="#" title="Yellow Submarine" subtitle="Beatles" after="$15" text={lorem}
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/people/2" alt="" width="80" />}
        link="#" title="Don't Stop Me Now" subtitle="Queen" after="$22" text={lorem}
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/people/3" alt="" width="80" />}
        link="#" title="Billie Jean" subtitle="Michael Jackson" after="$16" text={lorem}
      />
    </List>

    <Block title>Something more simple</Block>
    <List mediaList>
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/1" alt="" width="44" />}
        title="Yellow Submarine" subtitle="Beatles"
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/2" alt="" width="44" />}
        link="#" title="Don't Stop Me Now" subtitle="Queen"
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/3" alt="" width="44" />}
        title="Billie Jean" subtitle="Michael Jackson"
      />
    </List>

    <Block title>Inset</Block>
    <List mediaList inset>
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/1" alt="" width="44" />}
        title="Yellow Submarine" subtitle="Beatles"
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/2" alt="" width="44" />}
        link="#" title="Don't Stop Me Now" subtitle="Queen"
      />
      <ListItem
        media={<img src="http://lorempixel.com/160/160/fashion/3" alt="" width="44" />}
        title="Billie Jean" subtitle="Michael Jackson"
      />
    </List>    
  </Page>
);


