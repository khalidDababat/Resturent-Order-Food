import React from 'react'

type popularFoodProps = {
    key: number
    title: string
    image: string
}

const PopularFoodsItem: React.FC<popularFoodProps> = ({ title, image }) => {
    return (
        <div className="item_food">
            <img className="rounded-md" src={image} alt={title} />
            <div className="title">{title}</div>
        </div>
    )
}

export default PopularFoodsItem
