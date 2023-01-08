import React from 'react'

export default function Dish({ name, link, time, spicy,kuku,id}) {

    return (
        <>
            <div className='Dish'>
                <img src={link}/>
                <h2>{name}</h2>
                <p>{time}min</p>
                <p>Hot:{spicy}</p>
                <button onClick={()=>kuku(id)}>To prepare the dish</button>
            </div>
        </>
    )
}
