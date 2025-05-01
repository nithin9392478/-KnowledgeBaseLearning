import CurrentEvent from "./CurrentEvent";
import EventCard from "./EventCard";
import EventData from "./EventsData";
import './Event.css'
import currentEventData from "./CurrentEventData";
const Events = () => {
    return(
        <div className="d-flex justify-content-end pt-3">
            <div className="col-sm-11">
                <div className="fs-4 fw-bold d-flex col-sm-12">
                    <div className='d-flex justify-content-center'><div className='event-news-border h-100'></div></div>
                    NEWS &amp; EVENTS
                </div>
                <div className="d-flex flex-wrap justify-content-between col-sm-12">
                    <div className="col-md-8 col-sm-12 d-flex aligin-item-center flex-wrap gap-3 ">
                        {
                            EventData.map((event) => {
                                return (
                                    <EventCard image={event.image} title={event.title} description={event.description}/>
                                );
                            })
                        }
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex justify-content-center flex-column gap-1">
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