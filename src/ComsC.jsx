import React,{useContext} from 'react'
import { FirstName, LastName } from './App';


const ComsC = () => {
    
const fName = useContext(FirstName);
const lName = useContext(LastName);
  return (
    <div>
        <h1>My Name is  {fName} {lName} </h1>

        

    </div>
  )
}

export default ComsC