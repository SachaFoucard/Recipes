import React from 'react'
import { useState, useEffect } from 'react'

export default function Create({ list, setlist }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [time, settime] = useState('');
    const [id, setid] = useState('');
    const [spicy, setspicy] = useState('');


    const Predeft = (e) => {
        e.preventDefault()
    }

    const AddRecipe = () => {
        let newRecipe = {
            id,
            name,
            link,
            time,
            spicy
        }
        console.log(newRecipe);
        console.log(list);
        setlist((prev) => [...prev, newRecipe])
        list.push(newRecipe)
    }


    return (
        <>
            <form onSubmit={(e) => Predeft(e)}>
                <div>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter name of recipe'></input>
                    <input type="text" onChange={(e) => setLink(e.target.value)} placeholder='enter link of image'></input>
                    <input type="number" onChange={(e) => settime(e.target.value)} placeholder='enter time'></input>
                    <input type="number" onChange={(e) => setid(e.target.value)} placeholder='enter an id'></input>
                    <select type="number" onChange={(e) => setspicy(e.target.value)} placeholder='enter the level of spicy'>
                        <option value="spicy">spicy</option>
                        <option value="very spicy">very spicy</option>
                        <option value="not spicy">not spicy</option>
                    </select>
                    <button onClick={() => AddRecipe()}>Add</button>
                </div>
            </form>
        </>
    )
}
