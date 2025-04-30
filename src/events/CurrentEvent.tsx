import './CurrentEvent.css'
interface ICurrentEventProps {
    eventDate: number;
    eventMonth: string;
    title: string;
    discription: string;
    message: string;
    color: string;
}
const CurrentEvent = (props: ICurrentEventProps) => {
    return (
        <div className="col-sm-12  d-flex justify-content-between">
            <div className="col-sm-7 d-flex  justify-content-between">
                <div className="col-sm-3 date-month d-flex flex-column justify-content-center align-items-center">
                    <div className="fs-4 fw-bold">{props.eventDate}</div>
                    <div>{props.eventMonth}</div>
                </div>
                <div className="col-sm-8 date-month">
                    <div className='date-month'>
                        <div className='fw-bold'>{props.title}</div>
                        <div className='event-discription'>{props.discription}</div>
                    </div>
                    <div className='event-discription'>
                        <span className='fw-bold'>+</span>RSVP
                    </div>
                </div>
            </div>
            <div className="col-sm-4 d-flex flex-column justify-content-center aligin-items-center">
                <div className="border d-flex justify-content-center current-event-border text-white" style={{ backgroundColor: props.color }}>{props.message}</div>
            </div>
        </div>
    )
}
export default CurrentEvent;