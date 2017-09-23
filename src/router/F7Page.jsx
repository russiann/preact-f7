import { h, Component } from 'preact';
import PropTypes from 'prop-types';

const getF7Page = (component) => () => {
  return component.base.f7Page;
}

export default class F7Page extends Component {
  
  getChildContext() {
    return {
      getF7Page: getF7Page(this)
    };
  }

  render() {
    return this.props.children[0];
  }
}