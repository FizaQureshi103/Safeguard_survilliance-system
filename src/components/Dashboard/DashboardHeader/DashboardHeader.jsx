import './DashboardHeader.css'
import { FaDownload } from 'react-icons/fa';

function DashboardHeader(){

    const today = new Date();

    const date = today.toLocaleDateString('en-GB',{
        weekday: 'long',
        day: 'numeric',
        month:"long",
        year:'numeric'
    });
    
    return(
        <header>
            <div className="header-left">
                <h1>
                    Dashboard
                </h1>

                <p>
                    Overview of your security system
                </p>
            </div>

            <div className="header-right">
                <div className="date">
                    {date}
                 </div>
            </div>
           
        </header>
    );
}

export default DashboardHeader;