import React from 'react'

export default function InPreparation({ name, link, time, spicy,id,remove}) {
    return (
        <>
            <div className='Dish'>
                <img src={link}/>
                <h2>{name}</h2>
                <p>{time}min</p>
                <p>Hot:{spicy}</p>
                <button onClick={()=>remove(id)}>Remove</button>
            </div>
        </>
    )
}
