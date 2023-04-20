import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [boxList, setBoxList] = useState([
    { id : 1, title : '항해중'},
    { id : 2, title : '멀미중'}
  ])

  const [title, setTitle] = useState('')


  const titleHandler = (e) => {
    setTitle(e.target.value)
    console.log('input value : ' , title)
  }
  

  const addBox = () => {

    const newBox = {
      id : boxList.length + 1,
      title
    }

    setBoxList([...boxList, newBox])

  }

  return (
    <div className='container'>
      <div className='addContainer'>
        <input type='text' value={title} onChange={titleHandler} />
        <button onClick={addBox}>추가하기</button>
      </div>
        <h2>Todo List</h2>

      <div className='todoBoxContainer' >
        {boxList.map((boxList) => {
          return <div className='todoBox' key={boxList.id}><h3>{boxList.title}</h3></div>
        })}
      </div>
      
    </div>
  );
}

export default App;
