import React from 'react';
import { Page, Navbar, Block, Table } from '../../dist/preact-f7';

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
      <thead>
        <tr>
          <th className="label-cell">Desert (100g serving)</th>
          <th className="numeric-cell">Calories</th>
          <th className="numeric-cell">Fat(g)</th>
          <th className="numeric-cell">Carbs</th>
          <th className="numeric-cell">Protein(g)</th>
        </tr>
      </thead>
      <tbody>
        <For each="item" of={data}>
          <tr key={item.calories}>
            <td className="label-cell">{item.name}</td>
            <td className="numeric-cell">{item.calories}</td>
            <td className="numeric-cell">{item.fat}</td>
            <td className="numeric-cell">{item.carbs}</td>
            <td className="numeric-cell">{item.protein}</td>
          </tr>
        </For>
      </tbody>
    </Table>
    <Block title="Within card" />
    <Table card>
      <thead>
        <tr>
          <th className="label-cell">Desert (100g serving)</th>
          <th className="numeric-cell">Calories</th>
          <th className="numeric-cell">Fat (g)</th>
          <th className="numeric-cell">Carbs</th>
          <th className="numeric-cell">Protein (g)</th>
        </tr>
      </thead>
      <tbody>
        <For each="item" of={data}>
          <tr key={item.calories}>
            <td className="label-cell">{item.name}</td>
            <td className="numeric-cell">{item.calories}</td>
            <td className="numeric-cell">{item.fat}</td>
            <td className="numeric-cell">{item.carbs}</td>
            <td className="numeric-cell">{item.protein}</td>
          </tr>
        </For>
      </tbody>
    </Table>
    <div className="block-title">Selectable rows</div>
    <div className="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th className="checkbox-cell">
              <label className="checkbox">
                <input type="checkbox" />
                <i className="icon-checkbox"></i>
              </label>
            </th>
            <th className="label-cell">Desert (100g serving)</th>
            <th className="numeric-cell">Calories</th>
            <th className="numeric-cell">Fat (g)</th>
            <th className="numeric-cell">Carbs</th>
            <th className="numeric-cell">Protein (g)</th>
            <th className="checkbox-cell">
              <label className="checkbox">
                <input type="checkbox" />
                <i className="icon-checkbox"></i>
              </label>
              <span>In Stock</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <For each="item" of={data}>
            <tr key={item.calories}>
              <td className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </td>
              <td className="label-cell">{item.name}</td>
              <td className="numeric-cell">{item.calories}</td>
              <td className="numeric-cell">{item.fat}</td>
              <td className="numeric-cell">{item.carbs}</td>
              <td className="numeric-cell">{item.protein}</td>
              <td className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </td>
            </tr>
          </For>
        </tbody>
      </table>
    </div>
    <div className="block-title">Tablet-only columns</div>
    <div className="block-header">
      <p>"Comments" column will be visible only on large screen devices (tablets)</p>
    </div>
    <div className="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th className="checkbox-cell">
              <label className="checkbox">
                <input type="checkbox" />
                <i className="icon-checkbox"></i>
              </label>
            </th>
            <th className="label-cell">Desert (100g serving)</th>
            <th className="numeric-cell">Calories</th>
            <th className="numeric-cell">Fat (g)</th>
            <th className="numeric-cell">Carbs</th>
            <th className="numeric-cell">Protein (g)</th>
            <th className="tablet-only"><i>comments</i> Comments</th>
          </tr>
        </thead>
        <tbody>
          <For each="item" of={data}>
            <tr key={item.calories}>
              <td className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </td>
              <td className="label-cell">{item.name}</td>
              <td className="numeric-cell">{item.calories}</td>
              <td className="numeric-cell">{item.fat}</td>
              <td className="numeric-cell">{item.carbs}</td>
              <td className="numeric-cell">{item.protein}</td>
              <td className="tablet-only">{item.description}</td>
            </tr>
          </For>
        </tbody>
      </table>
    </div>
    <div className="block-title">Within card with title and actions</div>
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions"><a className="link icon-only"><i>sort</i></a><a className="link icon-only"><i>more</i></a></div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </th>
              <th className="label-cell">Desert (100g serving)</th>
              <th className="numeric-cell">Calories</th>
              <th className="numeric-cell">Fat (g)</th>
              <th className="numeric-cell">Carbs</th>
              <th className="numeric-cell">Protein (g)</th>
              <th className="tablet-only"><i>comments</i> Comments</th>
            </tr>
          </thead>
          <tbody>
            <For each="item" of={data}>
              <tr key={item.calories}>
                <td className="checkbox-cell">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <i className="icon-checkbox"></i>
                  </label>
                </td>
                <td className="label-cell">{item.name}</td>
                <td className="numeric-cell">{item.calories}</td>
                <td className="numeric-cell">{item.fat}</td>
                <td className="numeric-cell">{item.carbs}</td>
                <td className="numeric-cell">{item.protein}</td>
                <td className="tablet-only">{item.description}</td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
    </div>
    <div className="block-title">Sortable columns</div>
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions"><a className="link icon-only"><i>sort</i></a><a className="link icon-only"><i>more</i></a></div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </th>
              <th className="label-cell sortable-cell sortable-cell-active">Desert (100g serving)</th>
              <th className="numeric-cell sortable-cell">Calories</th>
              <th className="numeric-cell sortable-cell">Fat (g)</th>
              <th className="numeric-cell sortable-cell">Carbs</th>
              <th className="numeric-cell sortable-cell">Protein (g)</th>
              <th className="tablet-only"><i>comments</i> Comments</th>
            </tr>
          </thead>
          <tbody>
            <For each="item" of={data}>
              <tr key={item.calories}>
                <td className="checkbox-cell">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <i className="icon-checkbox"></i>
                  </label>
                </td>
                <td className="label-cell">{item.name}</td>
                <td className="numeric-cell">{item.calories}</td>
                <td className="numeric-cell">{item.fat}</td>
                <td className="numeric-cell">{item.carbs}</td>
                <td className="numeric-cell">{item.protein}</td>
                <td className="tablet-only">{item.description}</td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
    </div>
    <div className="block-title">With title and different actions on select</div>
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-header">
          <div className="data-table-title">Nutrition</div>
          <div className="data-table-actions"><a className="link icon-only"><i>sort</i></a><a className="link icon-only"><i>more</i></a></div>
        </div>
        <div className="data-table-header-selected">
          <div className="data-table-title-selected"><span className="data-table-selected-count"></span> items selected</div>
          <div className="data-table-actions"><a className="link icon-only"><i>trash</i></a><a className="link icon-only"><i>more</i></a></div>
        </div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </th>
              <th className="label-cell">Desert (100g serving)</th>
              <th className="numeric-cell">Calories</th>
              <th className="numeric-cell">Fat (g)</th>
              <th className="numeric-cell">Carbs</th>
              <th className="numeric-cell">Protein (g)</th>
              <th className="tablet-only"><i>comments</i> Comments</th>
            </tr>
          </thead>
          <tbody>
            <For each="item" of={data}>
              <tr key={item.calories}>
                <td className="checkbox-cell">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <i className="icon-checkbox"></i>
                  </label>
                </td>
                <td className="label-cell">{item.name}</td>
                <td className="numeric-cell">{item.calories}</td>
                <td className="numeric-cell">{item.fat}</td>
                <td className="numeric-cell">{item.carbs}</td>
                <td className="numeric-cell">{item.protein}</td>
                <td className="tablet-only">{item.description}</td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
    </div>
    <div className="block-title">Alternate header with actions</div>
    <div className="data-table data-table-init card">
      <div className="card-header">
        <div className="data-table-links"><a className="link">Add</a><a className="link">Remove</a></div>
        <div className="data-table-actions"><a className="link icon-only"><i>sort</i></a><a className="link icon-only"><i>more</i></a></div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <label className="checkbox">
                  <input type="checkbox" />
                  <i className="icon-checkbox"></i>
                </label>
              </th>
              <th className="label-cell">Desert (100g serving)</th>
              <th className="numeric-cell">Calories</th>
              <th className="numeric-cell">Fat (g)</th>
              <th className="numeric-cell">Carbs</th>
              <th className="numeric-cell">Protein (g)</th>
              <th className="tablet-only"><i>comments</i> Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <For each="item" of={data}>
              <tr key={item.calories}>
                <td className="checkbox-cell">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <i className="icon-checkbox"></i>
                  </label>
                </td>
                <td className="label-cell">{item.name}</td>
                <td className="numeric-cell">{item.calories}</td>
                <td className="numeric-cell">{item.fat}</td>
                <td className="numeric-cell">{item.carbs}</td>
                <td className="numeric-cell">{item.protein}</td>
                <td className="tablet-only">{item.description}</td>
                <td className="actions-cell"><a className="link icon-only"><i>compose</i></a><a className="link icon-only"><i>trash</i></a></td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
    </div>
    <div className="block-title">Collapsible</div>
    <div className="block-header">
      <p>The following table will be collapsed to kind of List View on small screens:</p>
    </div>
    <div className="card data-table data-table-collapsible data-table-init">
      <div className="card-header">
        <div className="data-table-title">Nutrition</div>
        <div className="data-table-actions"><a className="link icon-only"><i>sort</i></a><a className="link icon-only"><i>more</i></a></div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th className="label-cell">Desert (100g serving)</th>
              <th className="numeric-cell">Calories</th>
              <th className="numeric-cell">Fat (g)</th>
              <th className="numeric-cell">Carbs</th>
              <th className="numeric-cell">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            <For each="item" of={data}>
              <tr key={item.calories}>
                <td className="label-cell">{item.name}</td>
                <td className="numeric-cell">{item.calories}</td>
                <td className="numeric-cell">{item.fat}</td>
                <td className="numeric-cell">{item.carbs}</td>
                <td className="numeric-cell">{item.protein}</td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
    </div>
  </Page>
);