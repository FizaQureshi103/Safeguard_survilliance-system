import "./RouteControls.css";
import { incidents }from "../../../data/EvacuationMap/incident";
import {exits} from "../../../data/EvacuationMap/exits"


function RouteControls({incident, setIncident, destination, setDestination, generateRoute}) {

  return (

    <div className="route-controls">
        <h3>Generate Route</h3>
        
        <div className="control-group">
            <label>Incident Location</label>

                {/* INCIDENT */}
            <select 
                value={incident}
                onChange={(e) => setIncident(e.target.value)}
            >
                {incidents.map((item) => (
                    <option
                        key = {item}
                        value = {item}
                    >
                        {item}
                    </option>
                )) }
            </select>
        </div>

        <div className="control-group">

            <label>Destination</label>

            {/* DESTINATION */}
            <select 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            >
               {exits.map((item) => (
                 <option
                    key={item}
                    value={item}
                 >
                    {item}
                 </option>
               ))}
            </select>

        </div>

        <div className="control-group">
            <label>Route Type</label>

            <select>
                <option>Safest Route</option>
                <option>Shortest Route</option>
                <option>Fastest Route</option>
            </select>

        </div>

        <button onClick={generateRoute}>
            Generate Route
        </button>

    </div>

  );

}

export default RouteControls;