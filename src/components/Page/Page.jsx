import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { getInstance } from '../../instance';
import { createClassName } from 'create-classname';

const pageClass = createClassName('page', [
  'withSubnavbar:page-with-subnavbar',
]);


class Page extends Component {

  componentDidMount() {
    setTimeout(() => this.configurePage());
  }

  configurePage() {
    const instance = getInstance();
    const { hideNavbarOnScroll /*, withSubnavbar*/ } = this.props;
    const { $el } = this.context.getF7Page();
    instance.views.current.router.removeThemeElements($el)

    if (hideNavbarOnScroll) {
      instance.navbar.initHideNavbarOnScroll($el);
    }

  }
  render() {   

    return (
      <div className='page'>
        {this.props.children.map(child => {
          if (child && child.nodeName && child.nodeName.name === 'Navbar') return child;
          return;
        })}
        {this.props.children.map(child => {
          if (child && child.nodeName && child.nodeName.name === 'Toolbar') return child;
          return;
        })}
        <div className='page-content'>
          {this.props.children.map(child => {
            if (child && child.nodeName && child.nodeName.name !== 'Navbar' && child.nodeName.name !== 'Toolbar') return child;
            return;
          })}
        </div>
      </div>
    )
  }
}

Page.contextTypes = {
  text: PropTypes.string,
  getF7Page: PropTypes.func
};

export { Page };