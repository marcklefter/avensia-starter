
type CardProps = {
  title: string;
  image: string;
}

export const Card = ({ title, image }: CardProps) => {
  return (
    <div className="Card Card__medium">
      <p className="Card__title">{title.toUpperCase()}</p>
      <div><img className="Card__image" src={image} alt="" /></div>
    </div>
  )
}