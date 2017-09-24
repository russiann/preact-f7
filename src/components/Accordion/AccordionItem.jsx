import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

const accordionItemClass = createClassName('accordion-item');

export const AccordionItem = ({ children, className, style, title }) => (
  <li className={accordionItemClass({ className })}>
    <a className='item-content item-link'>
      <div className='item-inner'>{title}</div>
    </a>
    <div className='accordion-item-content'>{children}</div>
  </li>
);

AccordionItem.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};
