import React from 'react';
import { Page, Navbar, Accordion, AccordionItem, Block, List, ListItem, Icon } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Accordion" />
    <Accordion>
      <AccordionItem title='Lorem Ipsum'>
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
        </Block>
      </AccordionItem>
      <AccordionItem title='Nested List'>
        <List mediaList>
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 1" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 2" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 3" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 4" />
        </List>
      </AccordionItem>
      <AccordionItem title='Integer semper'>
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
        </Block>
      </AccordionItem>
    </Accordion>
    <Block title>Inset Accordion</Block>
    <Accordion inset>
      <AccordionItem title='Lorem Ipsum'>
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
        </Block>
      </AccordionItem>
      <AccordionItem title='Nested List'>
        <List mediaList>
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 1" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 2" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 3" />
          <ListItem media={<Icon type='icon' name="icon icon-f7" />} title="Item 4" />
        </List>
      </AccordionItem>
      <AccordionItem title='Integer semper'>
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
        </Block>
      </AccordionItem>
    </Accordion>
  </Page>
);
