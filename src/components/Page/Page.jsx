import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { getInstance } from '../../instance';
import { createClassName } from 'create-classname';

const pageContentClass = createClassName('page-content',[
  'pullToRefresh:ptr-content',
  'infiniteScroll:infinite-scroll-content'
], false);

const pageClass = createClassName('page', [
  'withSubnavbar:page-with-subnavbar',
]);


class Page extends Component {

  state = {
    hasTabs: false,
  }

  pageContent = {};
  propsPageContent = {};

  componentDidMount() {
    setTimeout(() => this.configurePage());
  }

  configurePage() {
    const instance = getInstance();
    const { hideNavbarOnScroll, hideToolbarOnScroll /*, withSubnavbar*/ } = this.props;

    if(this.context.getF7Page) {
      const { $el } = this.context.getF7Page();
      instance.views.current.router.removeThemeElements($el);

      if (hideNavbarOnScroll) {
        instance.navbar.initHideNavbarOnScroll($el);
      }
  
      if (hideToolbarOnScroll) {
        instance.toolbar.initHideToolbarOnScroll($el);
      }
    }
  }

  render() {   

    return (
      <div className={pageClass(this.props)}>
        {this.props.children.map(child => {
          return (child && child.nodeName && ['Navbar'].includes(child.nodeName.componentName)) ? child : null;
        })}
        {this.props.children.map(child => {
          return (child && child.nodeName && ['Toolbar'].includes(child.nodeName.componentName)) ? child : null;
        })}
        {this.props.children.map(child => {
          if (child && child.nodeName && ['Tabs'].includes(child.nodeName.componentName)) {
            if (!this.state.hasTabs) {
              console.log(this.state)
              this.setState({hasTabs: true});
            }
            console.log(this.state)
            return child;
          }
          
          this.propsPageContent = {};
          if(child && child.nodeName && ['PullToRefresh'].includes(child.nodeName.componentName)){
            if(!this.pageContent.pullToRefresh){
              this.pageContent.pullToRefresh = true;
              this.propsPageContent = { 'data-infinite-distance': child.attributes.distance || 50 };
            }
          }

          if(child && child.nodeName && ['InfiniteScroll'].includes(child.nodeName.componentName)){
            if(!this.pageContent.infiniteScroll){
              this.pageContent.infiniteScroll = true;
              this.propsPageContent = { 'data-infinite-distance': child.attributes.distance || 50 };
            }
          }
          return;
        })}
        <If condition={!this.state.hasTabs}>
          <div className={pageContentClass(this.pageContent)} {...this.propsPageContent}>
            {this.props.children.map(child => {
              return (child && child.nodeName && !['Navbar','Toolbar','Popup'].includes(child.nodeName.componentName)) ? child : null;
            })}
          </div>
        </If>
        {this.props.children.map(child => {
          return (child && child.nodeName && ['Popup'].includes(child.nodeName.componentName)) ? child : null;
        })}
      </div>
    )
  }
}

Page.contextTypes = {
  text: PropTypes.string,
  getF7Page: PropTypes.func
};

export { Page };