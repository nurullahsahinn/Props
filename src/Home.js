import React from 'react'
import "./App.css"
const Home = (props) => {
  return (
    
    <div>
       


        <ul>
            <li>{"Adı : " + props.name + " " + "Soyadı: " + props.surname}</li>
        </ul>
    </div>
  )
}

export default Home