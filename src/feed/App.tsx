import './style.css';

import {
  Item
} from './types';

import {
  CardList
} from './CardList';

// ...

const items: Item[] = [
  {
    title: 'first item',
    image: 'http://via.placeholder.com/350x150'
  },
  {
    title: 'second item',
    image: 'http://via.placeholder.com/350x150'
  }
];

export const App = () => {
  return <CardList items={items} />;
}