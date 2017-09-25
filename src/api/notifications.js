import { getInstance } from '../instance';
import render from 'preact-render-to-string';

export const notification = (options) => {
  if(options.icon && typeof options.icon != 'string'){
    options.icon = render(options.icon);
  }

  const $notification = getInstance().notification.create(options);

  return $notification;
}