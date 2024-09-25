import { useState } from 'react'
import './App.css'

function App() {
 let [color,setColor]=useState("olive");

  return (
  <div className='h-screen w-full duration-200'  style={{backgroundColor:color}}>
<h3 className='main-dev text-center font-bold text-xl '>BackgroundChanger</h3>
<div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
<div className='flex flex-wrap justify-center bg-white gap-3 py-2 px-3 rounded-xl'>

    <button onClick={()=>setColor("red")} className='box' style={{backgroundColor:"red"}}>
      Red
    </button>

    <button onClick={()=>setColor("green")}  className='box' style={{backgroundColor:"green"}}>
      Green
    </button>

    <button onClick={()=>setColor("blue")}  className='box' style={{backgroundColor:"blue"}}>
      Blue
    </button>

    <button onClick={()=>setColor("yellow")}   className='box1' style={{backgroundColor:"yellow"}}>
      Yellow
    </button>

    <button onClick={()=>setColor("white")}   className='box1' style={{backgroundColor:"white"}}>
      white
    </button>

    <button onClick={()=>setColor("purple")}   className='box' style={{backgroundColor:"purple"}}>
      Purple
    </button>

    <button onClick={()=>setColor("pink")}   className='box' style={{backgroundColor:"pink"}}>
      Pink
    </button>

    <button onClick={()=>setColor("gray")}   className='box' style={{backgroundColor:"gray"}}>
      Gray
    </button>

    <button onClick={()=>setColor("Tan")} className='box' style={{backgroundColor:"Tan"}}>
    Tan
    </button>

    <button onClick={()=>setColor("RosyBrown")}  className='box' style={{backgroundColor:"RosyBrown"}}>
      RosyBrown
    </button>

    <button onClick={()=>setColor("Goldenrod")} className='box' style={{backgroundColor:"Goldenrod"}}>
    Goldenrod
    </button>

    <button onClick={()=>setColor("Aqua")}   className='box' style={{backgroundColor:"Aqua"}}>
      Aqua
    </button>

    <button onClick={()=>setColor("orange")}   className='box' style={{backgroundColor:"orange"}}>
      Orange
    </button>

</div>
</div>
  </div>
  )
}

export default App
