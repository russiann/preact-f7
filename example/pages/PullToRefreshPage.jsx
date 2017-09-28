import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, ListGroup, BlockFooter, Block, PullToRefresh } from '../../dist/preact-f7';


//refresh, done, beforeDestroy, pullMove, pullEnd, pullStart
export default class PullToRefreshPage extends Component {
  render() {
    return (
      <Page>
        <Navbar title='Pull To Refresh' />
        <PullToRefresh 
          distance={50}
          onRefresh={(done) => {
            console.log('onRefresh');
            setTimeout(done, 1000);
          }}
          onDone={() => console.log('onDone')}
          onPullMove={() => console.log('onPullMove')}
          onPullEnd={() => console.log('onPullEnd')}
          onPullStart={() => console.log('onPullStart')}
        />
        <div className="list media-list">
          <ul>
            <li className="item-content">
              <div className="item-media"><img src="http://lorempixel.com/88/88/abstract/1" width="44"/></div>
              <div className="item-inner">
                <div className="item-title-row">
                  <div className="item-title">Yellow Submarine</div>
                </div>
                <div className="item-subtitle">Beatles</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-media"><img src="http://lorempixel.com/88/88/abstract/2" width="44"/></div>
              <div className="item-inner">
                <div className="item-title-row">
                  <div className="item-title">Don't Stop Me Now</div>
                </div>
                <div className="item-subtitle">Queen</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-media"><img src="http://lorempixel.com/88/88/abstract/3" width="44"/></div>
              <div className="item-inner">
                <div className="item-title-row">
                  <div className="item-title">Billie Jean</div>
                </div>
                <div className="item-subtitle">Michael Jackson</div>
              </div>
            </li>
          </ul>
          <div className="block-footer">
            <p>Just pull page down to let the magic happen.Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
          </div>
        </div>
      </Page>
    );
  }
}


