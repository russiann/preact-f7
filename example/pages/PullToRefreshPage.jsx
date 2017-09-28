import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, ListGroup, BlockFooter, Block, PullToRefresh } from '../../dist/preact-f7';


//refresh, done, beforeDestroy, pullMove, pullEnd, pullStart
export default class PullToRefreshPage extends Component {
  state = {
    items: [{
      img: 'http://lorempixel.com/88/88/abstract/1',
      title: 'Yellow Submarine',
      subtitle: 'Beatles'
    }, {
      img: 'http://lorempixel.com/88/88/abstract/2',
      title: "Don't Stop Me Now",
      subtitle: 'Queen'
    }, {
      img: 'http://lorempixel.com/88/88/abstract/3',
      title: 'Billie Jean',
      subtitle: 'Michael Jackson'
    }]
  };

  newItem = {
    img: 'http://lorempixel.com/88/88/abstract/4',
    title: 'Californication',
    subtitle: 'Red Hot Chili Peppers'
  };

  render() {
    return (
      <Page>
        <Navbar title='Pull To Refresh' />
        <PullToRefresh 
          distance={50}
          onRefresh={(done) => {
            console.log('onRefresh');
            this.setState({ items: [...this.state.items, this.newItem] })
            setTimeout(done, 1000);
          }}
          onDone={() => console.log('onDone')}
          onPullMove={() => console.log('onPullMove')}
          onPullEnd={() => console.log('onPullEnd')}
          onPullStart={() => console.log('onPullStart')}
        />
        <List mediaList>
          <For each='item' of={this.state.items}>
            <ListItem media={<img src={item.img} width="44" />} title={item.title} subtitle={item.subtitle} />
          </For>
        </List>
        <BlockFooter>
          <p>Just pull page down to let the magic happen.Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
        </BlockFooter>
      </Page>
    );
  }
}


