
import React, {useState} from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

// import logo from './logo.svg';
 import './App.css';

function App() {
  let [colors, setColors] = useState([
    'violet','blue',
    'lightblue','green',
    'greenyellow',
    'orange','red'
  ])
  const addColor = (newColor) =>{
    setColors([...colors, newColor])
  }
  let colorMap = colors.map((color, i) =>{
    return(
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
        {colors.map((color, i) => 
        <ColorBlock key='color'   color={color} />
        )}
    </div>

  );
}

export default App;
