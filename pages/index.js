import { useState,useEffect } from "react"

export default function Home() {
  const [newTaskName, setNewTaskName] = useState()
  return (
    <div>
      <input className="border-2 border-black m-2 p-2 rounded-sm" type='text' placeholder="Enter a new task" onChange={(e)=>setNewTaskName(e.target.value)}/>
      <button onClick={()=> alert (newTaskName)} className='m-2 border-2 border-black bg-blue-500 p-2 text-white rounded-sm'>Save new task</button>
    </div>
  )
}
