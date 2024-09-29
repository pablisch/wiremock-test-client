import './App.css'
import {useState} from "react"
import axios from "axios"
import {baseUrl} from "./data.js";

function App() {
  const [stuff, setStuff] = useState([])

  const handleGetStuff = async () => {
    const response = await axios.get(`${baseUrl}/stuff`)
      console.log(response.data)
    setStuff(response.data)
  }

  return (
    <div className="app">
      <button onClick={handleGetStuff}>Get stuff</button>
      <div className="stuff-container">
        {stuff.length > 0 ? stuff.map(item => (
            <div className="stuff-item" key={item.id}>
            <h1 className="stuff-name">{item.name}</h1>
            <p className="stuff-description">{item.description}</p>
            </div>
        )) : null}
        {/*  {typeof stuff}*/}
      </div>
    </div>
  )
}

export default App
