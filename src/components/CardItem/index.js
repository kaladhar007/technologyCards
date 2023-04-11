// Write your code here.

import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details

  return (
    <li className={`li_container ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="img_of_card" alt={title} src={imgUrl} />
    </li>
  )
}

export default CardItem
