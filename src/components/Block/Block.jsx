import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const blockClass = createClassName('block', [
  'inset',
  'tabletInset:table-inset',
  'row',
  'strong:block-strong'
]);

const blockTitleClass = createClassName('block-title');


const BlockTitle = ({ title, children, style, className }) => (
  <div className={blockTitleClass({className})} style={style}>
    <Choose>
      <When condition={typeof title === 'string'}>
        {title}
      </When>
      <Otherwise>{children}</Otherwise>
    </Choose>
  </div>
);


export const Block = ({ children, text, style, title, header, footer, className, ...props }) => (
  <Choose >
    <When condition={title}>
      <BlockTitle title={title} children={children} style={style} className={className} />
    </When>
    <Otherwise>
      <div className={blockClass({className, ...props})} style={style} >
        <If condition={header} >
          <div className="block-header">{header}</div>
        </If>
        {text || children}
        <If condition={footer} >
          <div className="block-footer">{footer}</div>
        </If>
      </div>
    </Otherwise>
  </Choose>
);



Block.propTypes = {
  title: PropTypes.any,
  text: PropTypes.string,
  header: PropTypes.string,
  footer: PropTypes.string
};
