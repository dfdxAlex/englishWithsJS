import { sellect } from './sellect';

export function viewLogOn()
{
      let props;
      props = sellect();
      props[0].style.display = 'block';
      props[1].style.display = 'block';
      props[2].style.display = 'block';
      props[3].style.display = 'none';
}