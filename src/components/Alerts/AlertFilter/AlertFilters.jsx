import "./AlertFilters.css";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";


function AlertFilters({
            selectedType, setSelectedType, 
            selectedSeverity, setSelectedSeverity,
            selectedStatus, setSelectedStatus,
            searchQuery, setSearchQuery,
            selectedDate, setSelectedDate
          }) {
            
  return (
    <div className="alert-filters">

      <select
          value={selectedType}
          onChange={(e) => 
            setSelectedType(e.target.value)
          }
      >
        <option>All Types</option>
        <option>Fire Detected</option>
        <option>Weapon Detected</option>
        <option>Missing Child</option>
        <option>Snatching</option>
      </select>

      <select
          value ={selectedSeverity}
          onChange={(e) => 
              setSelectedSeverity(e.target.value)
          } 
      >
        <option>All Severity</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
          value = {selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option>All Status</option>
        <option>Active</option>
        <option>Resolved</option>
      </select>

      <div className="date-filter">
        <FaCalendarAlt />
        <input
          type="date"
          placeholder="Select Date"
          value={selectedDate}
          onChange={(e) => 
            setSelectedDate(e.target.value)}
        />
      </div>

      <div className="search-filter">
        <FaSearch />
        <input
          type="text"
          placeholder="Search alerts..."
          value={searchQuery}
          onChange={(e) => 
            setSearchQuery(e.target.value)
          }
        />
      </div>

    </div>
  );
}

export default AlertFilters;