import React from 'react'; 
import './Greet.css'


function Greet({name,age,address,school}){
    console.log(name,"name")
    return(
         <div className='greeting-card'>
            <h1>Hello {name}</h1>
            <p>Iam {age} year old </p>
            <p>I stay at {address} </p>
            <p>My school is {school} </p>
        </div>
    )
}

export default Greet;

//JSX is a syntax extension for javascript that allows one to write HTML like code within their javascript files and it is recommended for local development support.

//Why it is used?
// It allows HTML in javascript.
//It is more convenient 
//It wraps multiple elements in one parent.

// Difference btn props and state
//props are inputsto components in 

  //while
//State is a component that helps you count the numbers of times a button is clicked.
//Hooks in react are functions starting with use and are built-in hooks in  API references.