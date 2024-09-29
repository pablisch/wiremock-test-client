import '../App.css'
import axios from "axios";
import {baseUrl} from "../data.js";

// eslint-disable-next-line react/prop-types
function InfoPanel({resource, setResource, resourceName}) {
    console.log("resource:", resource);
    console.log("setResource:", setResource);
    console.log("resourceName:", resourceName);

    const handleGetResource = async () => {
        const response = await axios.get(`${baseUrl}/${resourceName}`);
        // console.log(response.data)
        setResource(response.data)
    }

    const handleClearResource = async () => {
        setResource([])
    }

    return (
        <div className="info-panel">
            <button className="resource-btn btn" onClick={handleGetResource}>{`Get ${resourceName}`}</button>
            <div className="resource-container">
                {/* eslint-disable-next-line react/prop-types */}
                {resource.length > 0 ? resource.map(item => (
                    <div className="resource-item" key={item.id}>
                        <h1 className="resource-name">{item.name}</h1>
                        <p className="resource-description">{item.description}</p>
                    </div>
                )) : null}
            </div>
            <button className="clear-btn btn" onClick={handleClearResource}>{`Clear ${resourceName}`}</button>
        </div>
    )

}

export default InfoPanel