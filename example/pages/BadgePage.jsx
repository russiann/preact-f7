import { h } from 'preact';
import { Page, Navbar, Toolbar, Badge, List, ListItem, Icon } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Badge" right={
      <a className="link icon-only">
        <Icon
          ifIos="f7:person_fill"
          ifMaterial="material:person"
          badge={<Badge color='red'>5</Badge>}
        />
      </a>
    } />
    <Toolbar tabbar labels>
      <a href="#tab-1" className="tab-link tab-link-active">
        <Icon
          fill
          ifIos="f7:email_fill"
          ifMaterial="material:email"
          badge={<Badge color='green'>5</Badge>}
        />
        <span className="tabbar-label">Inbox</span>
      </a>
      <a href="#tab-2" className="tab-link">
        <Icon
          ifIos="f7:today"
          ifMaterial="material:today"
          badge={<Badge color='red'>7</Badge>}
        />
        <span className="tabbar-label">Calendar</span>
      </a>
      <a href="#tab-3" className="tab-link">
        <Icon
          ifIos="f7:cloud"
          ifMaterial="material:file_upload"
          badge={<Badge color='red'>1</Badge>}
        />
        <span className="tabbar-label">Upload</span>
      </a>
    </Toolbar>
    <List>
      <ListItem
        title="Foo Bar"
        media={<Icon icon='icon-f7' />}
        after={<Badge>0</Badge>}
      />
      <ListItem
        title="Ivan Petrov"
        media={<Icon icon='icon-f7' />}
        after={<Badge color='blue'>CEO</Badge>}
      />
      <ListItem
        title="John Doe"
        media={<Icon icon='icon-f7' />}
        after={<Badge color='green'>5</Badge>} />
      <ListItem
        title="Jane Doe"
        media={<Icon icon='icon-f7' />}
        after={<Badge color='orange'>NEW</Badge>}
      />
    </List>
  </Page>
);
