import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { getInstance } from '../../instance';
import { createClassName } from 'create-classname';

const pageClass = createClassName('page', [
  'withSubnavbar:page-with-subnavbar',
]);


class Page extends Component {

  state = {
    hasTabs: false,
    hasPullToRefresh: false
  }

  componentDidMount() {
    setTimeout(() => this.configurePage());
  }

  configurePage() {
    const instance = getInstance();
    const { hideNavbarOnScroll, hideToolbarOnScroll /*, withSubnavbar*/ } = this.props;
    const { $el } = this.context.getF7Page();
    instance.views.current.router.removeThemeElements($el)

    if (hideNavbarOnScroll) {
      instance.navbar.initHideNavbarOnScroll($el);
    }

    if (hideToolbarOnScroll) {
      instance.toolbar.initHideToolbarOnScroll($el);
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

          if(child && child.nodeName && ['PullToRefresh'].includes(child.nodeName.componentName)){
            if(!this.state.hasPullToRefresh){
              this.setState({ hasPullToRefresh: true });
            }
          }
          return;
        })}
        <If condition={!this.state.hasTabs}>
          <Choose>
            <When condition={this.state.hasPullToRefresh}>
              <div className="page-content ptr-content">
                {this.props.children.map(child => {
                  return (child && child.nodeName && !['Navbar','Toolbar'].includes(child.nodeName.componentName)) ? child : null;
                })}
              </div>
            </When>
            <Otherwise>
              <div className='page-content'>
                {this.props.children.map(child => {
                  return (child && child.nodeName && !['Navbar','Toolbar'].includes(child.nodeName.componentName)) ? child : null;
                })}
              </div>
            </Otherwise>
          </Choose>
        </If>
        {this.props.children.map(child => {
          return (child && child.nodeName && ['SheetModal'].includes(child.nodeName.componentName)) ? child : null;
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