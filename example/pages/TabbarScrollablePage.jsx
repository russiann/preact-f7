import { h } from 'preact';
import { Page, Navbar, Toolbar, Block, Tabs, Tab, TabLink } from '../../dist/preact-f7';

const TabbarScrollablePage = () => (
  <Page>
    <Navbar title="Tabbar Scrollable"/>

    <Toolbar tabbar scrollable>
      <TabLink label="Tab 1" tabId="#tab-1" active />
      <TabLink label="Tab 2" tabId="#tab-2" />
      <TabLink label="Tab 3" tabId="#tab-3" />
      <TabLink label="Tab 4" tabId="#tab-4" />
      <TabLink label="Tab 5" tabId="#tab-5" />
      <TabLink label="Tab 6" tabId="#tab-6" />
      <TabLink label="Tab 7" tabId="#tab-7" />
      <TabLink label="Tab 8" tabId="#tab-8" />
      <TabLink label="Tab 9" tabId="#tab-9" />
      <TabLink label="Tab 10" tabId="#tab-10" />
    </Toolbar>

    <Tabs>
      <For each="number" of={ [1,2,3,4,5,6,7,8,9,10] }>
        <Tab id={`tab-${number}`} active={number === 1}>
          <Block>
            <p><b>Tab {number} content</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
            <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
            <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
            <p>Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!</p>
            <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
            <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
            <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
          </Block>
        </Tab>
      </For>
    </Tabs>

  </Page>
);


export default TabbarScrollablePage;
