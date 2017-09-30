import { h } from 'preact';
import { createClassName } from 'create-classname';

const cellClass = createClassName('', [
  'checkbox:checkbox-cell',
  'label:label-cell',
  'numeric:numeric-cell',
  'tabletOnly:tablet-only',
  'sortable:sortable-cell',
  'active:sortable-cell-active',
  'actions:actions-cell'
]);

export const TableCell = ({ children, header, checkbox, label, numeric, tabletOnly, className, ...props }) => (
  <Choose>
    <When condition={header}>
      <th className={cellClass({ className, checkbox, label, numeric, tabletOnly })} {...props}>
        <If condition={checkbox}>
          <label className="checkbox">
            <input type="checkbox" />
            <i className="icon-checkbox"></i>
          </label>
        </If>
        {children}
      </th>
    </When>
    <Otherwise>
      <td className={cellClass({ className, checkbox, label, numeric, tabletOnly })} {...props}>
        <If condition={checkbox}>
          <label className="checkbox">
            <input type="checkbox" />
            <i className="icon-checkbox"></i>
          </label>
        </If>
        {children}
      </td>
    </Otherwise>
  </Choose>
);