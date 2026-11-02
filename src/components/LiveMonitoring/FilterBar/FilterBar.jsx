import {
    FaSearch,
    FaThLarge,
    
} from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import "./FilterBar.css";

function FilterBar({
    searchTerm,
    setSearchTerm,
    selectedFloor,
    setSelectedFloor,
    viewMode,
    setViewMode,
}) {
    return (
        <div className="filter-bar">

            <div className="camera-search">
                <FaSearch />
                <input
                    type="text"
                    placeholder="Search camera..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <select className="floor-select"
                value={selectedFloor}
                onChange={(e) =>
                    setSelectedFloor(e.target.value)
                }
            >
                <option>All Floors</option>
                <option>Ground Floor</option>
                <option>Floor 1</option>
                <option>Floor 2</option>

            </select>

            <div className="view-buttons">
                <button
                    className={viewMode === "grid" ? "active" : ""}
                    onClick={() => setViewMode("grid")}
                    title="Grid View"
                >
                    <FaThLarge />
                </button>

                <button
                    className={viewMode === "compact" ? "active" : ""}
                    onClick={() => setViewMode("compact")}
                    title="Compact View"
                >
                    <MdGridView />
                </button>

            </div>

        </div>
    );
}

export default FilterBar;