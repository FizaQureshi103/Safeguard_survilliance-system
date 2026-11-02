import "./MapToolbar.css";
import { FaSearch } from "react-icons/fa";

function MapToolbar({selectedFloor,setSelectedFloor,searchLocation, setSearchLocation}) {
  return (
    <div className="map-toolbar">

      <select className="floor-select">
        <option>Floor 1</option>
        <option>Floor 2</option>
        <option>Floor 3</option>
      </select>

      <div className="map-search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search location..."
          value = {searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      {/* <button className="legend-btn">
        View Legend
      </button> */}

    </div>
  );
}

export default MapToolbar;