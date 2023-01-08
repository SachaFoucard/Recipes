import './App.css'
import { useEffect, useState } from 'react'
import List from './data/dishes.json'
import Dish from './Components/Dish'
import InPreparation from './Components/InPreparation'
import Create from './Components/Create'

function App() {
  const [list, setlist] = useState([]);
  const [listPreparation, setlistPreparation] = useState([]);

  useEffect(() => {
    setlist(List)
  }, [])

  const kuku = (id) => {
    let dish = list.find((item) => item.id == id) // take the dish you click on
    let newList = list.filter((item)=>item.id != id ) //create new list wihout the dish
    setlist(newList) // update the list wihout the dish
    listPreparation.push(dish) // add to the list of preparation the dish that you click on
  }
  const Remove = (id)=>{
    let dish = listPreparation.find((item)=>item.id == id) // take the dish you click on
    let newList = listPreparation.filter((item)=>item.id != id) //create new list wihout the dish
    setlistPreparation(newList) // update the list wihout the dish
    list.push(dish) // add to the list of preparation the dish that you click on

  }
  return (
    <>
    <div>
      <Create list={list} setlist={setlist}/>
    </div>
      <h1>Menu</h1>
        <div className="grid">
          {list.length == 0 ? <h2>Any Menu for the moment</h2> :
          list.map((item, i) =><Dish key={i} {...item} kuku={kuku} />)}
        </div>

   <br></br>
   <hr></hr>

      <h1>In preparation</h1>
      {listPreparation.length == 0 ? <h2>Any Dish in preparation</h2> :
        listPreparation.map((item, i) => <InPreparation key={i} {...item} remove={Remove}/>)}

    </>
  )
}

export default App
