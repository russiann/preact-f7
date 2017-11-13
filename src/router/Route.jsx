import { h, Component, render } from 'preact';
import { createRouteConfiguration } from './';
import { getInstance } from '../instance';
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
    const { path, component, options, protected: _protected } = this.props;
    
    const route = {
      path,
      async: (router, route, resolve) => {
        const config = {
          component: {
            template: () => {
              return node = render(<F7Page store={this.context.store} name={component.name} children={h(component)} />);
            },
            mounted() {
              fixes.fixPreloaders(this);
            },
            destroyed: () => {
              unrender(node);
              fixes.fixPreviousPageAfterSwipeBack();
              fixes.fixSubnavbars();
            }
          }
        };

        if (_protected === undefined) {
          return resolve(config);
        }

        Promise
          .resolve()
          .then(_protected)
          .then(canKeepGoing => {
            canKeepGoing ? next(config) : next({})
          });
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
  },
  fixSubnavbars: () => {
    setTimeout(() => {
      const previouPage = document.querySelector('.page-previous');
      if (previouPage && previouPage.f7Page) {
        const classNames = previouPage.className.split(' ');
        const hasSubNavbar = previouPage.f7Page.$navbarEl.find('.subnavbar').length;
        if (!hasSubNavbar) {
          if (classNames.includes('page-with-subnavbar')) {
            const index = classNames.indexOf('page-with-subnavbar');
            classNames.splice(index, 1);
            previouPage.className = classNames.join(' ');
          }
        }
      }
    })
  },
  fixPreloaders: (page) => {
    const instance = getInstance();
    page.$el.find('.preloader').each((index, preloaderEl) => {
      instance.preloader.init(preloaderEl);
    });
  }
}

export { Route };