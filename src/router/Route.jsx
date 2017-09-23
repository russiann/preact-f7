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
        destroyed: () => unrender(node)
      },
      ...options
    };

    createRouteConfiguration(route);
  }

  render() {
    return null
  }
}

export { Route };