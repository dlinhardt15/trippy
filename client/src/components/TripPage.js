export default function TripPage ({trips}) {

    return (
        <div>
            <div className="trips-container">
                {trips.map(trip => {
                    <div className="trip">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                })}
            </div>
        </div>
    )
   
}