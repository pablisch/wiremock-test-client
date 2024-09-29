import './App.css'
import {useState} from "react"
import axios from "axios"
import {baseUrl} from "./data.js";
import InfoPanel from "./components/InfoPanel.jsx";

function App() {
  const [stuff, setStuff] = useState([])
  const [colours, setColours] = useState([])

  return (
    <div className="app">
        <InfoPanel resource={stuff} setResource={setStuff} resourceName={"stuff"} />
        <InfoPanel resource={colours} setResource={setColours} resourceName={"colours"} />
    </div>
  )
}

export default App
