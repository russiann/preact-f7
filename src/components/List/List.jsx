import { h, Component } from 'preact';

import * as Simple from './types/Simple';
import * as Links from './types/Links';
import * as Default from './types/Default';

class List extends Component {

  renderChildren = () => {
    return React.Children.map(this.props.children, child => 
      React.cloneElement(child, {...child.props, listType: this.getListType()})
    )
  }

  getListType = () => {
    const { simple, links, mediaList } = this.props;
    const cases = { simple, links, mediaList };
    return Object.keys(cases).reduce((type, curr) => cases[curr] ? curr : type,'');
  }

  render() {
    const type = this.getListType();

    switch (type) {
      case 'simple':
        return <Simple.List {...this.props} >{this.renderChildren()}</Simple.List>
      case 'links':
        return <Links.List {...this.props} >{this.renderChildren()}</Links.List>
      default:
        return <Default.List {...this.props} >{this.renderChildren()}</Default.List>
    }
  }

}

export { List }