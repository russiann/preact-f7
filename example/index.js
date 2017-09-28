import { h, Component } from 'preact';
import 'framework7/dist/css/framework7.css';
import F7 from 'framework7';
import { Framework7, View, Router, Route, Navbar, Page, Panel } from '../dist/preact-f7';

import './assets/stylesheets/styles.css';

import AboutPage from './pages/AboutPage';
import AccordionPage from './pages/AccordionPage';
import ActionSheetPage from './pages/ActionSheetPage';
import BadgePage from './pages/BadgePage';
import BlockPage from './pages/BlockPage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import ChipsPage from './pages/ChipsPage';
import FabPage from './pages/FabPage';
import HomePage from './pages/HomePage';
import ListsPage from './pages/ListsPage';
import MessagesPage from './pages/MessagesPage';
import NavbarsPage from './pages/NavbarsPage';
import SubNavbarTitlePage from './pages/SubNavbarTitlePage';
import SubNavbarsPage from './pages/SubNavbarsPage';
import ToolbarsPage from './pages/ToolbarsPage';
import TabbarPage from './pages/TabbarPage';
import TabbarLabelsPage from './pages/TabbarLabelsPage';
import TabbarScrollablePage from './pages/TabbarScrollablePage';
import HideToolbarOnScrollPage from './pages/HideToolbarOnScrollPage';
import HideNavbarOnScrollPage from './pages/HideNavbarOnScrollPage';
import GridPage from './pages/GridPage';
import InputsPage from './pages/InputsPage';
import TablePage from './pages/TablePage';
import RangeSliderPage from './pages/RangeSliderPage';
import ToastPage from './pages/ToastPage';
import PreloaderPage from './pages/PreloaderPage';
import NotificationsPage from './pages/NotificationPage';
import SheetPage from './pages/SheetPage';
import PullToRefreshPage from './pages/PullToRefreshPage';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import PanelPage, { LeftPanel, RightPanel } from './pages/PanelPage';
import PopupPage from './pages/PopupPage';

const params = {
  view: { pushState: true }
};

export default class App extends Component {
	render() {
		return (
			<Framework7 F7={F7} params={params}>
				<Panel left cover component={<LeftPanel />} />
				<Panel right reveal component={<RightPanel />} />
				<View>
					<Router>
						<Route path="/" component={HomePage} />
						<Route path="/about" component={AboutPage}/>
						<Route path="/accordion" component={AccordionPage} />
						<Route path="/action-sheet" component={ActionSheetPage} />
						{/* <Route path="/autocomplete" component={AutocompletePage} /> */}
						<Route path="/badge" component={BadgePage} />
						<Route path="/buttons" component={ButtonPage} />
						{/* <Route path="/calendar" component={CalendarPage} /> */}
						<Route path="/cards" component={CardPage} />
						{/* <Route path="/checkbox" component={CheckboxPage} /> */}
						<Route path="/chips" component={ChipsPage} />
						{/* <Route path="/contacts-list" component={ContactsListPage} /> */}
						<Route path="/content-block" component={BlockPage} />
						<Route path="/data-table" component={TablePage} />
						{/* <Route path="/dialog" component={DialogPage} /> */}
						<Route path="/fab" component={FabPage} />
						<Route path="/inputs" component={InputsPage} />
						{/* <Route path="/fab-morph" component={FABMorphPage} />
						<Route path="/form-storage" component={FormStoragePage} />
						<Route path="/icons" component={IconsPage} /> */}
						<Route path="/infinite-scroll" component={InfiniteScrollPage} />
						{/* <Route path="/inputs" component={InputsPage} /> */}
						<Route path="/grid" component={GridPage} />
						{/* <Route path="/lazy-load" component={LazyLoadPage} /> */}
						<Route path="/list" component={ListsPage} />
						{/* <Route path="/login-screen" component={LoginScreenPage} /> */}
						<Route path="/messages" component={MessagesPage} />
						<Route path="/navbar" component={NavbarsPage} />
						<Route path="/hide-navbars-on-scroll" component={HideNavbarOnScrollPage} />
						<Route path="/notifications" component={NotificationsPage} />
						<Route path="/panel" component={PanelPage} />
						{/* <Route path="/picker" component={PickerPage} />
						<Route path="/photo-browser" component={PhotoBrowserPage} />
						{/* <Route path="/panel" component={PanelsPage} />
						<Route path="/picker" component={PickerPage} />
						<Route path="/photo-browser" component={PhotoBrowserPage} /> */}
						<Route path="/popup" component={PopupPage} />
						{/* <Route path="/popover" component={PopoverPage} /> */}
						<Route path="/preloader" component={PreloaderPage} />
						{/* <Route path="/progressbar" component={ProgressBarPage} /> */}
						<Route path="/pull-to-refresh" component={PullToRefreshPage} />
						{/* <Route path="/radio" component={RadioPage} /> */}
						<Route path="/range" component={RangeSliderPage} />
						{/* <Route path="/searchbar" component={SearchbarPage} />
						<Route path="/searchbar-expandable" component={SearchbarExpandablePage} /> */}
						<Route path="/sheet-modal" component={SheetPage} />
						{/* <Route path="/smart-select" component={SmartSelectPage} />
						<Route path="/sortable" component={SortableListPage} />
						<Route path="/statusbar" component={StatusbarPage} /> */}
						<Route path="/subnavbar" component={SubNavbarsPage} />
						<Route path="/subnavbar-title" component={SubNavbarTitlePage} />
						{/* <Route path="/swipeout" component={SwipeoutPage} />
						<Route path="/swiper" component={SwiperSliderPage} />
						<Route path="/tabs" component={TabsPage} />
						<Route path="/timeline" component={TimelinePage} /> */}
						<Route path="/toast" component={ToastPage} />
						{/* <Route path="/toggle" component={TogglePage} /> */}
						<Route path="/toolbar-tabbar" component={ToolbarsPage} />
						<Route path="/tabbar" component={TabbarPage} />
						<Route path="/tabbar-labels" component={TabbarLabelsPage} />
						<Route path="/tabbar-scrollable" component={TabbarScrollablePage} />
						<Route path="/tabbar-hide-on-scroll" component={HideToolbarOnScrollPage} />
						{/* <Route path="/virtual-list" component={VirtualListPage} /> */}
					</Router>
				</View>
			</Framework7>
		);
	}
}

