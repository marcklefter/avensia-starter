import {
  Card
} from './Card';

import { 
  Item 
} from './types'

type CardListProps = {
  items: Item[];
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <>
      {/* {items.map(item => {
        return (
          <Card title={item.title} image={item.image} />
        )
      })} */}

      {items.map(item => (
        <Card {...item} />
      ))}
    </>
  )
}