import { h } from 'preact';
import { pick } from 'lodash';
import { getInstance } from '../../instance';

import { createClassName } from 'create-classname';

/**
|--------------------------------------------------
| Get Icon Configuration
|--------------------------------------------------
*/

const validIconProps = ['icon', 'f7', 'material', 'fa', 'ion', 'name'];


const getIconConfiguration = ({ ...props, ifIos, ifMaterial, size, color, link, navbarIcon, badge, fill, closeSheet }) => {
  const { theme: currentTheme } = getInstance();
  const styleProps = { size, color, link, navbarIcon, badge, fill, closeSheet };

  if (currentTheme === 'ios' && typeof ifIos === 'string')
    return getConditionalIconConfiguration(ifIos, styleProps);

  if (currentTheme === 'md' && typeof ifMaterial === 'string')
    return getConditionalIconConfiguration(ifMaterial, styleProps);

  return Object
    .keys(pick(props, validIconProps))
    .reduce((type, curr) => props[curr] ? { type: curr, name: props[curr], size, color, link, navbarIcon, fill, badge, closeSheet } : type, {})
};


const getConditionalIconConfiguration = (text, styleProps) => {
  const [type, name] = text.split(":");
  return { type, name, ...styleProps };
};

/**
|--------------------------------------------------
| Component
|--------------------------------------------------
*/

const hashtag = '#'; // avoid lint error

const icon = createClassName('icon', ['fill:icon-fill', 'closeSheet:sheet-close', { name: 'color', className: ({ color }) => `color-${color}` }]);

const I = ({...props, style, size, children, link, navbarIcon, badge}) => (
  <Choose>
    <When condition={link || navbarIcon}>
      <a href={hashtag} className="link">
        <i className={icon(props)} style={{ fontSize: size, ...style }} >
          {children}
          <If condition={badge}>{badge}</If>
        </i>
      </a>
    </When>
    <Otherwise>
      <i className={icon(props)} style={{ fontSize: size, ...style }}>
        {children}
        <If condition={badge}>{badge}</If>
      </i>
    </Otherwise>
  </Choose>
);

export const Icon = (props) => (
  <With icon={getIconConfiguration(props)}>
    <Choose>
      <When condition={icon.type === 'icon'}>
        <I {...icon} className={`icon ${icon.name}`} style={props.style}></I>
      </When>
      <When condition={icon.type === 'f7'}>
        <I {...icon} className="f7-icons" style={props.style}>{icon.name}</I>
      </When>
      <When condition={icon.type === 'material'}>
        <I {...icon} className="material-icons" style={props.style}>{icon.name}</I>
      </When>
      <When condition={icon.type === 'fa'}>
        <I {...icon} className={`fa fa-${icon.name}`} style={props.style}></I>
      </When>
      <When condition={icon.type === 'ion'}>
        <I {...icon} className={`ion-${icon.name}`} style={props.style}></I>
      </When>
      <Otherwise>
        <I {...icon} className={`${icon.name}`} style={props.style}></I>
      </Otherwise>
    </Choose>
  </With>
);
