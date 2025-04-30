import CurrentEvent from "./CurrentEvent";
import EventCard from "./EventCard";
import EventData from "./EventsData";
import './Event.css'
import currentEventData from "./CurrentEventData";
const Events = () => {
    return(
        <div className="d-flex justify-content-end">
            <div className="col-sm-11">
                <div className="fs-4 fw-bold d-flex">
                    <div className='d-flex justify-content-center'><div className='event-news-border h-100'></div></div>
                    News &amp; Events
                </div>
                <div className="d-flex justify-content-between">
                    <div className="col-sm-8 d-flex flex-wrap gap-3 ">
                        {
                            EventData.map((event) => {
                                return (
                                    <EventCard image={event.image} title={event.title} description={event.description}/>
                                );
                            })
                        }
                    </div>
                    <div className="col-sm-3 d-flex flex-column gap-1">
                        {
                            currentEventData.map((event)=>{
                                return(
                                <div className="card" style={{borderRight:`4px solid ${event.color}`}}>
                                    <CurrentEvent 
                                        eventDate={event.eventDate} 
                                        eventMonth={event.eventMonth} 
                                        title={event.title} 
                                        discription={event.description} 
                                        message={event.message}
                                        color={event.color}
                                    />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events;