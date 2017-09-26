import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, ListGroup, BlockFooter, Block, PullToRefresh, InfiniteScroll } from '../../dist/preact-f7';

export default class InfiniteScrollPage extends Component {

  constructor(){
    super();

    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.addItens();
  }

  addItens = () => {
    const qtdItems = 15; 
    const { items } = this.state;
    let last = 0;
    if(items.length) last = items[items.length - 1];

    for(let i = 0; i < qtdItems; i++)
      items.push(last + i);

    this.setState({ items })
  }

  render() {
    return (
      <Page>
        <Navbar title='Infinite Scroll' />
        <Block title='Scroll bottom' />
        <List simple>
          {this.state.items.map((number) => <ListItem>Item {number}</ListItem>)}
        </List>
        <InfiniteScroll distance={2} onInfinite={() => {
          this.addItens();
          console.log('OnInfinite');
        }} />
      </Page>
    );
  }
}


