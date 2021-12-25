import { useState } from 'react';
import './App.css';
import Retangle from "./components/Retangle"
import Sidebar from "./components/Sidebar"

function App() {
  const [color,setColor] = useState(["gray", "gray", "gray", "gray", "gray"]);
  const [open,setOpen] = useState(4)
  const [all,setAll] = useState(12)
  const [closed,setClosed] = useState(8)
  return (
    <div className="App">
     <Sidebar open={open} all={all} closed={closed}></Sidebar>
     <Retangle color={color} setColor={setColor} /> 
    </div>
  );
}

export default App;
