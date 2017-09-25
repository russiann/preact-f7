import { getInstance } from '../instance';
import render from 'preact-render-to-string';

export const toast = (options) => {
  if(options.icon && typeof options.icon != 'string'){
    options.icon = render(options.icon);
  }

  const $toast = getInstance().toast.create(options);

  return $toast;
}