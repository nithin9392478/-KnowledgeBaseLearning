import './Event.css'
interface IEventCardProps {
    image: { src: string, alt: string };
    title: string;
    description: string;
}
const EventCard = (props: IEventCardProps) => {
    return (
        <div className=''>
            <div className="card event-image">
                <img src={props.image.src} className="card-img-top h-100    " alt="..." />
            </div>
            <div className='event-discription fw-bold'>{props.title}</div>
            <div className="event-discription">{props.description}</div>
        </div>
    )
}
export default EventCard;