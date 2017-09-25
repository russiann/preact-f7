import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { getInstance } from '../../instance';
import { createClassName } from 'create-classname';

const pageClass = createClassName('page', [
  'withSubnavbar:page-with-subnavbar',
]);


class Page extends Component {

  state = {
    hasTabs: false
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
    console.log('hasTabs',this.state.hasTabs)
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
          return;
        })}
        <If condition={!this.state.hasTabs}>
          <div className='page-content'>
            {this.props.children.map(child => {
              return (child && child.nodeName && !['Navbar','Toolbar'].includes(child.nodeName.componentName)) ? child : null;
            })}
          </div>
        </If>
      </div>
    )
  }
}

Page.contextTypes = {
  text: PropTypes.string,
  getF7Page: PropTypes.func
};

export { Page };