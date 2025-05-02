import './Resources.css'
interface IResourceCardProps {
    image: { src: string, alt: string };
    name: string;
    color: string;
}
const ResourceCard = (props: IResourceCardProps) => {
    return(
        <div className="d-flex gap-1 col-md-2 col-sm-3 p-3 border resource-card hvr-bounce-out text-white" style={{backgroundColor: props.color}}>
            <div className='d-flex justify-content-center aligin-items-center'><img className='resource-image' src={props.image.src} alt={props.image.alt} /></div>
            <div className='resource-text'>{props.name}</div>
        </div>
    )
}
export default ResourceCard;