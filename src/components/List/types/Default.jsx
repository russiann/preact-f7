import { h } from 'preact';
import { createClassName } from 'create-classname';

const listClass = createClassName('list', ['inset', 'tabletInset:tablet-inset', 'mediaList:media-list'])

const ListContent = ({ grouped, children }) => (
  <Choose>
    <When condition={grouped}>{children}</When>
    <Otherwise>
      <ul>{children}</ul>
    </Otherwise>
  </Choose>
);

const List = ({children, grouped, nested, ...props}) => (
  <Choose>
    <When condition={nested}>
      <ListContent grouped={grouped}>{children}</ListContent>
    </When>
    <Otherwise>
      <div className={listClass(props)}>
        <ListContent grouped={grouped}>{children}</ListContent>
      </div>
    </Otherwise>
  </Choose>
);

const ItemContent = ({link, children}) => (
  <Choose>
    <When condition={link}>
      <a href={link} className="item-link item-content" >{children}</a>
    </When>
    <Otherwise>
      <div className="item-content" >{children}</div>
    </Otherwise>
  </Choose>
);

const ItemTitle = ({title, after, text, footer, listType}) => (
  <div className={listType === 'mediaList' ? 'item-title-row': 'item-title'} >
    {(title && !text && listType !== 'mediaList') && title}
    
    {(title && text && !footer && listType !== 'mediaList') && [
      <div key={0} className="item-header">{title}</div>,
      <span key={1}>{text}</span>
    ]}

    {(listType === 'mediaList') && [
      <div key={0} className="item-title">{title}</div>,
      <div key={1} className="item-after">{after}</div>,
    ]}
    
    {(title && text && footer) && [
      <div key={0} className="item-header">{title}</div>,
      <span key={1}>{text}</span>,
      <div key={3} className="item-footer">{footer}</div>
    ]}
  </div>
);

const ListItem = ({media, title, subtitle, text, footer, after, link, children, listType}) => (
  <li>
    <ItemContent link={link} className="item-content" >
      {media && <div className="item-media" >{media}</div>}
      <div className="item-inner" >
        <ItemTitle title={title} after={after} text={text} footer={footer} listType={listType} />
        {subtitle && <div className="item-subtitle" >{subtitle}</div>}
        {text && listType === 'mediaList' && <div className="item-text" >{text}</div>}
        {after && listType !== 'mediaList' && <div className="item-after" >{after}</div>}
      </div>
    </ItemContent>
    <div>{children}</div>
  </li>
);

export { List,  ListItem };