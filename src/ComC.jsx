import React from 'react'
import { FirstName, LastName } from './App'

const ComC = () => {
  return (
    <div>
        <FirstName.Consumer>
            {(fName)=>{
                return(
                    <LastName.Consumer>
                        {(lName)=>{
                            return(
                                <h1>My Name is {fName} {lName}</h1>
                            )
                        }}

                    </LastName.Consumer>
                )
            }}

        </FirstName.Consumer>

    </div>
  )
}

export default ComC