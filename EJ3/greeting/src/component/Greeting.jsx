import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

const Greeting = (props) => {
    
    const [name, setName] = useState(props.name)
    
    useEffect(()=>{   
        setTimeout(()=>{ setName('Alfonsina')}, 2000)}, [])
        
        return (
            <div>
         <p>Hola {name}</p>
    </div>
)}



export default Greeting

