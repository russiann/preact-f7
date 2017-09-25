import { h, Component, render } from 'preact';
import { createRouteConfiguration } from './';
import F7Page from './F7Page';

/**
|--------------------------------------------------
| Unrender Method
|--------------------------------------------------
*/

const unrender = (node) => {
  render('', '', node)
};

/**
|--------------------------------------------------
| Route Component
|--------------------------------------------------
*/

class Route extends Component {
  componentWillMount() {
    let node;
    const { path, component, options } = this.props;
    
    const route = {
      path,
      component: {
        template: () => {
          return node = render(<F7Page name={component.name} children={h(component)} />);
        },
        destroyed: () => {
          unrender(node);
          fixes.fixPreviousPageAfterSwipeBack();
        }
      },
      ...options
    };

    createRouteConfiguration(route);
  }

  render() {
    return null
  }
}

/**
|--------------------------------------------------
| Fixes
|--------------------------------------------------
*/

const fixes = {
  fixPreviousPageAfterSwipeBack: () => {
    setTimeout(() => {
      const previouPage = document.querySelector('.page-previous');
      if (previouPage) {
        const classNames = previouPage.className.split(' ');
        if (classNames.includes('page-next')) {
          const index = classNames.indexOf('page-next');
          classNames.splice(index, 1);
          previouPage.className = classNames.join(' ');
        }
      }
    })
  }
}

export { Route };