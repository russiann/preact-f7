import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, Block, Icon } from '../../dist/preact-f7';

const HomePage = () => (
  <Page>
    <Navbar
      left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon />}
      title="Preact F7"
      disableBackButton
    />
    
    <List links>
      <ListItem link="/about" text="About Framework7" />
    </List>

    <Block title='Components' />
    <List links>
      <ListItem link="/accordion" text="Accordion" />
      <ListItem link="/action-sheet" text="Action Sheet" />
      <ListItem link="/autocomplete" text="Autocomplete" badge="TODO" />
      <ListItem link="/badge" text="Badge" />
      <ListItem link="/buttons" text="Buttons" />
      <ListItem link="/calendar" text="Calendar / Date Picker" badge="TODO" />
      <ListItem link="/cards" text="Cards" />
      <ListItem link="/checkbox" text="Checkbox" badge="TODO" />
      <ListItem link="/chips" text="Chips / Tags" />
      <ListItem link="/contacts-list" text="Contacts List" badge="TODO" />
      <ListItem link="/content-block" text="Content Block" />
      <ListItem link="/data-table" text="Data Table" badge="TODO" />
      <ListItem link="/dialog" text="Dialog" badge="TODO" />
      <ListItem link="/fab" text="FAB" badge="TODO" />
      <ListItem link="/fab-morph" text="FAB Morph" badge="TODO" />
      <ListItem link="/form-storage" text="Form Storage" badge="TODO" />
      <ListItem link="/icons" text="Icons" badge="TODO" />
      <ListItem link="/infinite-scroll" text="Infinite Scroll" badge="TODO" />
      <ListItem link="/inputs" text="Inputs" />
      <ListItem link="/grid" text="Grid / Layout Grid" />
      <ListItem link="/lazy-load" text="Lazy Load" badge="TODO" />
      <ListItem link="/list" text="List View" />
      <ListItem link="/login-screen" text="Login Screen" badge="TODO" />
      <ListItem link="/messages" text="Messages" />
      <ListItem link="/navbar" text="Navbar" />
      <ListItem link="/notifications" text="Notifications" badge="TODO" />
      <ListItem link="/panel" text="Panels / Side Panels" badge="TODO" />
      <ListItem link="/picker" text="Picker" badge="TODO" />
      <ListItem link="/photo-browser" text="Photo Browser" badge="TODO" />
      <ListItem link="/popup" text="Popup" badge="TODO" />
      <ListItem link="/popover" text="Popover" badge="TODO" />
      <ListItem link="/preloader" text="Preloader" badge="TODO" />
      <ListItem link="/progressbar" text="Progress Bar" badge="TODO" />
      <ListItem link="/pull-to-refresh" text="Pull To Refresh" badge="TODO" />
      <ListItem link="/radio" text="Radio" badge="TODO" />
      <ListItem link="/range" text="Range Slider" badge="TODO"/>
      <ListItem link="/searchbar" text="Searchbar" badge="TODO" />
      <ListItem link="/searchbar-expandable" text="Searchbar Expandable" badge="TODO" />
      <ListItem link="/sheet-modal" text="Sheet Modal" badge="TODO" />
      <ListItem link="/smart-select" text="Smart Select" badge="TODO" />
      <ListItem link="/sortable" text="Sortable List" badge="TODO" />
      <ListItem link="/statusbar" text="Statusbar" badge="TODO" />
      <ListItem link="/subnavbar" text="Subnavbar" />
      <ListItem link="/swipeout" text="Swipeout (Swipe To Delete)" badge="TODO" />
      <ListItem link="/swiper" text="Swiper Slider" badge="TODO" />
      <ListItem link="/tabs" text="Tabs" badge="TODO" />
      <ListItem link="/timeline" text="Timeline" badge="TODO" />
      <ListItem link="/toast" text="Toast" />
      <ListItem link="/toggle" text="Toggle" badge="TODO" />
      <ListItem link="/toolbar-tabbar" text="Toolbar & Tabbar" />
      <ListItem link="/virtual-list" text="VirtualList" badge="TODO" />
    </List>
    <Block title="Themes"/>
    <List links>
      <ListItem link="/?theme=ios" text="iOS Theme" badge="TODO" />
      <ListItem link="/?theme=md" text="Material (MD) Theme" badge="TODO" />
      <ListItem link="/color-themes/" text="Color Themes" badge="TODO" />
    </List>
    <Block title>Page Loaders</Block>
    <List links>
      <ListItem link="/page-loader-template7/vladimir/123/about-me/1/?start=0&end=30#top" text="Template7 Page" badge="TODO" />
      <ListItem link="/page-loader-component/vladimir/123/about-me/1/?start=0&end=30#top" text="Component Page" badge="TODO" />
    </List>
  </Page>
);

export default HomePage;
