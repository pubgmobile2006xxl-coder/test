import { useState } from "react"

function Dars(){
    // const [count, setcount]=useState(0)
    
    return(
        <>
        <div>
            <h1> {count} </h1>
            <button onClick={()=>setcount(count +1)}>plus</button>
            <button onClick={()=> setcount(0)}>o'chirish</button>
            <button onClick={()=>setcount(count -1)}>plus</button>
        </div>
        </>
    )
}
export default Dars