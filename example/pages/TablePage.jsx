import { h } from 'preact';
import { Page, Navbar, Block, BlockHeader, Table, TableHeader, TableRow, TableBody, TableCell, Icon } from '../../dist/preact-f7';

const data = [{
  name: 'Frozen yogurt',
  calories: '159',
  fat: '6.0',
  carbs: '24',
  protein: '4.0',
  description: 'I like frozen yogurt'
}, {
  name: 'Ice cream sandwich',
  calories: '237',
  fat: '9.0',
  carbs: '37',
  protein: '4.4',
  description: 'But like ice cream more'
}, {
  name: 'Eclair',
  calories: '262',
  fat: '16.0',
  carbs: '24',
  protein: '6.0',
  description: 'Super tasty'
}, {
  name: 'Cupcake',
  calories: '305',
  fat: '3.7',
  carbs: '67',
  protein: '4.3',
  description: 'Don\'t like it'
}];

export default () => (
  <Page>
    <Navbar title="Data Table" />
    <Block title="Plain table" />
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell header label>Desert (100g serving)</TableCell>
          <TableCell header numeric>Calories</TableCell>
          <TableCell header numeric>Fat(g)</TableCell>
          <TableCell header numeric>Carbs</TableCell>
          <TableCell header numeric>Protein(g)</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each="item" of={data}>
          <TableRow key={item.calories}>
            <TableCell label>{item.name}</TableCell>
            <TableCell numeric>{item.calories}</TableCell>
            <TableCell numeric>{item.fat}</TableCell>
            <TableCell numeric>{item.carbs}</TableCell>
            <TableCell numeric>{item.protein}</TableCell>
          </TableRow>
        </For>
      </TableBody>
    </Table>
    <Block title="Within card" />
    <Table card>
      <TableHeader>
        <TableRow>
          <TableCell header label>Desert (100g serving)</TableCell>
          <TableCell header numeric>Calories</TableCell>
          <TableCell header numeric>Fat(g)</TableCell>
          <TableCell header numeric>Carbs</TableCell>
          <TableCell header numeric>Protein(g)</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each="item" of={data}>
          <TableRow key={item.calories}>
            <TableCell label>{item.name}</TableCell>
            <TableCell numeric>{item.calories}</TableCell>
            <TableCell numeric>{item.fat}</TableCell>
            <TableCell numeric>{item.carbs}</TableCell>
            <TableCell numeric>{item.protein}</TableCell>
          </TableRow>
        </For>
      </TableBody>
    </Table>
    <Block title='Selectable rows' />
    <Table card init>
      <TableHeader>
        <TableRow>
          <TableCell header checkbox />
          <TableCell header label>Desert (100g serving)</TableCell>
          <TableCell header numeric>Calories</TableCell>
          <TableCell header numeric>Fat (g)</TableCell>
          <TableCell header numeric>Carbs</TableCell>
          <TableCell header numeric>Protein (g)</TableCell>
          <TableCell header checkbox>
            <span>In Stock</span>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each="item" of={data}>
          <TableRow key={item.calories}>
            <TableCell checkbox />
            <TableCell label>{item.name}</TableCell>
            <TableCell numeric>{item.calories}</TableCell>
            <TableCell numeric>{item.fat}</TableCell>
            <TableCell numeric>{item.carbs}</TableCell>
            <TableCell numeric>{item.protein}</TableCell>
            <TableCell checkbox />
          </TableRow>
        </For>
      </TableBody>
    </Table>
    <Block title='Tablet-only columns' />
    <BlockHeader>
      <p>"Comments" column will be visible only on large screen devices (tablets)</p>  
    </BlockHeader>
    <Table card init>
      <TableHeader>
        <TableRow>
          <TableCell header checkbox />
          <TableCell header label>Desert (100g serving)</TableCell>
          <TableCell header numeric>Calories</TableCell>
          <TableCell header numeric>Fat (g)</TableCell>
          <TableCell header numeric>Carbs</TableCell>
          <TableCell header numeric>Protein (g)</TableCell>
          <TableCell header tabletOnly>
            <Icon ifIos="f7:chat_fill" ifMaterial="material:message" />
            Comments
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each="item" of={data}>
          <TableRow key={item.calories}>
            <TableCell checkbox />
            <TableCell label>{item.name}</TableCell>
            <TableCell numeric>{item.calories}</TableCell>
            <TableCell numeric>{item.fat}</TableCell>
            <TableCell numeric>{item.carbs}</TableCell>
            <TableCell numeric>{item.protein}</TableCell>
            <TableCell tabletOnly>{item.description}</TableCell>
          </TableRow>
        </For>
      </TableBody>
    </Table>
    <Block title='Within card with title and actions' />
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions">
          <a className="link icon-only">
            <Icon ifIos="f7:sort" ifMaterial="material:sort" />
          </a>
          <a className="link icon-only">
            <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
          </a>
        </div>
      </div>
      <div className="card-content">
        <table>
          <TableHeader>
            <TableRow>
              <TableCell header checkbox />
              <TableCell header label>Desert (100g serving)</TableCell>
              <TableCell header numeric>Calories</TableCell>
              <TableCell header numeric>Fat (g)</TableCell>
              <TableCell header numeric>Carbs</TableCell>
              <TableCell header numeric>Protein (g)</TableCell>
              <TableCell header tabletOnly>
                <Icon ifIos="f7:chat_fill" ifMaterial="material:message" />
                Comments
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each="item" of={data}>
              <TableRow key={item.calories}>
                <TableCell checkbox />
                <TableCell label>{item.name}</TableCell>
                <TableCell numeric>{item.calories}</TableCell>
                <TableCell numeric>{item.fat}</TableCell>
                <TableCell numeric>{item.carbs}</TableCell>
                <TableCell numeric>{item.protein}</TableCell>
                <TableCell tabletOnly>{item.description}</TableCell>
              </TableRow>
            </For>
          </TableBody>
        </table>
      </div>
    </div>
    <Block title='Sortable columns' />
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions">
          <a className="link icon-only">
            <Icon ifIos="f7:sort" ifMaterial="material:sort" />
          </a>
          <a className="link icon-only">
            <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
          </a>
        </div>
      </div>
      <div className="card-content">
        <table>
          <TableHeader>
            <TableRow>
              <TableCell header checkbox />
              <TableCell header label sortable active>Desert (100g serving)</TableCell>
              <TableCell header numeric sortable>Calories</TableCell>
              <TableCell header numeric sortable>Fat (g)</TableCell>
              <TableCell header numeric sortable>Carbs</TableCell>
              <TableCell header numeric sortable>Protein (g)</TableCell>
              <TableCell header tabletOnly>
                <Icon ifIos="f7:chat_fill" ifMaterial="material:message" />
                Comments
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each="item" of={data}>
              <TableRow key={item.calories}>
                <TableCell checkbox />
                <TableCell label>{item.name}</TableCell>
                <TableCell numeric>{item.calories}</TableCell>
                <TableCell numeric>{item.fat}</TableCell>
                <TableCell numeric>{item.carbs}</TableCell>
                <TableCell numeric>{item.protein}</TableCell>
                <TableCell tabletOnly>{item.description}</TableCell>
              </TableRow>
            </For>
          </TableBody>
        </table>
      </div>
    </div>
    <Block title='With title and different actions on select' />
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-header">
          <div className="data-table-title">Nutrition</div>
          <div className="data-table-actions">
            <a className="link icon-only">
              <Icon ifIos="f7:sort" ifMaterial="material:sort" />
            </a>
            <a className="link icon-only">
              <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
            </a>
          </div>
        </div>
        <div className="data-table-header-selected">
          <div className="data-table-title-selected">
            <span className="data-table-selected-count"></span>
            items selected
          </div>
          <div className="data-table-actions">
            <a className="link icon-only">
              <Icon ifIos="f7:trash" ifMaterial="material:delete" />
            </a>
            <a className="link icon-only">
              <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
            </a>
          </div>
        </div>
      </div>
      <div className="card-content">
        <table>
          <TableHeader>
            <TableRow>
              <TableCell header checkbox />
              <TableCell header label>Desert (100g serving)</TableCell>
              <TableCell header numeric>Calories</TableCell>
              <TableCell header numeric>Fat (g)</TableCell>
              <TableCell header numeric>Carbs</TableCell>
              <TableCell header numeric>Protein (g)</TableCell>
              <TableCell header tabletOnly>
                <Icon ifIos="f7:chat_fill" ifMaterial="material:message" />
                Comments
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each="item" of={data}>
              <TableRow key={item.calories}>
                <TableCell checkbox />
                <TableCell label>{item.name}</TableCell>
                <TableCell numeric>{item.calories}</TableCell>
                <TableCell numeric>{item.fat}</TableCell>
                <TableCell numeric>{item.carbs}</TableCell>
                <TableCell numeric>{item.protein}</TableCell>
                <TableCell tabletOnly>{item.description}</TableCell>
              </TableRow>
            </For>
          </TableBody>
        </table>
      </div>
    </div>
    <Block title='Alternate header with actions' />
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-links">
          <a className="link">Add</a>
          <a className="link">Remove</a>
        </div>
        <div className="data-table-actions">
          <a className="link icon-only">
            <Icon ifIos="f7:sort" ifMaterial="material:sort" />
          </a>
          <a className="link icon-only">
            <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
            </a>
          </div>
      </div>
      <div className="card-content">
        <table>
          <TableHeader>
            <TableRow>
              <TableCell header checkbox />
              <TableCell header label>Desert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell tabletOnly>
                <Icon ifIos="f7:chat_fill" ifMaterial="material:message" />
                Comments
              </TableCell>
              <TableCell header />
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each="item" of={data}>
              <TableRow key={item.calories}>
                <TableCell checkbox />
                <TableCell label>{item.name}</TableCell>
                <TableCell numeric>{item.calories}</TableCell>
                <TableCell numeric>{item.fat}</TableCell>
                <TableCell numeric>{item.carbs}</TableCell>
                <TableCell numeric>{item.protein}</TableCell>
                <TableCell tabletOnly>{item.description}</TableCell>
                <TableCell actions>
                  <a className="link icon-only">
                    <Icon ifIos="f7:compose" ifMaterial="material:edit" />
                  </a>
                  <a className="link icon-only">
                    <Icon ifIos="f7:trash" ifMaterial="material:delete" />
                  </a>
                </TableCell>
              </TableRow>
            </For>
          </TableBody>
        </table>
      </div>
    </div>
    <Block title='Collapsible' />
    <BlockHeader>
      <p>The following table will be collapsed to kind of List View on small screens:</p>
    </BlockHeader>
    <div className="card data-table data-table-collapsible data-table-init">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions">
          <a className="link icon-only">
            <Icon ifIos="f7:sort" ifMaterial="material:sort" />
          </a>
          <a className="link icon-only">
            <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
          </a>
        </div>
      </div>
      <div className="card-content">
        <table>
          <TableHeader>
            <TableRow>
              <TableCell header label>Desert (100g serving)</TableCell>
              <TableCell header numeric>Calories</TableCell>
              <TableCell header numeric>Fat (g)</TableCell>
              <TableCell header numeric>Carbs</TableCell>
              <TableCell header numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each="item" of={data}>
              <TableRow key={item.calories}>
                <TableCell label>{item.name}</TableCell>
                <TableCell numeric>{item.calories}</TableCell>
                <TableCell numeric>{item.fat}</TableCell>
                <TableCell numeric>{item.carbs}</TableCell>
                <TableCell numeric>{item.protein}</TableCell>
              </TableRow>
            </For>
          </TableBody>
        </table>
      </div>
    </div>
  </Page>
);