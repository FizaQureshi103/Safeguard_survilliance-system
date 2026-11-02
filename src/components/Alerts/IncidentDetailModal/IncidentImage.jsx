function IncidentImage({alert}){
    return(
        <div className="incident-image">
            <img 
                src={alert.image}
                alt = {alert.type}
            />
        </div>
    );
}
export default IncidentImage;