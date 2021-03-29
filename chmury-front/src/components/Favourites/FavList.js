import React from 'react'
import FavItem from './FavItem'

export default function FavList({value}) {
    const {favourites} = value
    return (
        <div className="container-fluid">
            {favourites.map(item=>{
                return <FavItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
