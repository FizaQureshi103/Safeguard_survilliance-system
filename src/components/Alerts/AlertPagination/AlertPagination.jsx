import "./AlertPagination.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AlertPagination({ currentPage, setCurrentPage, alertsPerPage, totalAlerts,}){
     
    const totalPages = Math.ceil(totalAlerts / alertsPerPage);

    const firstAlert = totalAlerts === 0 ? 0 : (currentPage -1) * alertsPerPage + 1;
    const lastAlert = Math.min(currentPage * alertsPerPage, totalAlerts);

  return (
    <div className="alert-pagination">

        <p className="pagination-info">
          Showing <strong>{firstAlert} - {lastAlert}</strong> of <strong>{totalAlerts}</strong> alerts
        </p>

        <div className="pagination-buttons">

          <button 
              className="page-btn" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index + 1}
                className={`page-btn ${
                    currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
            >
                {index + 1}
            </button>
          ))}

          <button 
              className="page-btn"
              disabled = {currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              >
              <FaChevronRight />
          </button>

        </div>

    </div>
  );
}

export default AlertPagination;