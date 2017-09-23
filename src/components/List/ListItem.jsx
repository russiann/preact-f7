import React, { Component } from 'react';

import * as Simple from './types/Simple';
import * as Links from './types/Links';
import * as Default from './types/Default';

class ListItem extends Component {

  render() {

    if (this.props.divider) {
      return (<div className="item-divider">{this.props.title || this.props.children}</div>)
    }

    if (this.props.groupTitle) {
      return (<li className="list-group-title">{this.props.title || this.props.children}</li>)
    }

    switch (this.props.listType) {
      case 'simple':
        return <Simple.ListItem {...this.props} />
      case 'links':
        return <Links.ListItem {...this.props} />
      default:
        return <Default.ListItem {...this.props} />
    }
  }

}

export { ListItem }