import { h } from 'preact';
import PropTypes from 'prop-types';
import { createClassName } from 'create-classname';

import { ChipMedia } from './ChipMedia';

const chipClass = createClassName('chip', [
  { name: 'color', className: ({ color }) => `color-${color}` }
]);

export const Chip = ({ children, onClickDelete, label, backgroundColorMedia, textColorMedia, ...props, style }) => (
  <div className={chipClass(props)} style={style}>
    {children.length != 0 && <ChipMedia backgroundColor={backgroundColorMedia} color={textColorMedia} >{children}</ChipMedia>}
    <div className='chip-label'>{label}</div>
    {onClickDelete && <span className='chip-delete' onClick={onClickDelete} />}
  </div>
);

Chip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  onClickDelete: PropTypes.func,
  backgroundColorMedia: PropTypes.string,
  textColorMedia: PropTypes.string,
  style: PropTypes.object
}
  
