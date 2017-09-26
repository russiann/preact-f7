import { h, Component } from 'preact';
import { Page, Navbar, List, ListItem, ListGroup, BlockFooter, Block, PullToRefresh, InfiniteScroll } from '../../dist/preact-f7';

export default class InfiniteScrollPage extends Component {
  render() {
    return (
      <Page>
        <Navbar title='InfiniteScroll' />
        <div className="block-title">Scroll bottom</div>
        <div className="list simple-list">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
            <li>Item 10</li>
            <li>Item 11</li>
            <li>Item 12</li>
            <li>Item 13</li>
            <li>Item 14</li>
            <li>Item 15</li>
            <li>Item 16</li>
            <li>Item 17</li>
            <li>Item 18</li>
            <li>Item 19</li>
            <li>Item 20</li>
          </ul>
        </div>
        <InfiniteScroll distance={2} onInfinite={() => console.log('OnInfinite')} />
      </Page>
    );
  }
}


