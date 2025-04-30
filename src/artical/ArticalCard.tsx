import './Artical.css'
interface IArticalCardProps {
    image: { src: string, alt: string };
    title: string;
    description: string;
}
const ArticalCard = (props:IArticalCardProps) => {
    return(
        <div className=''>
            <div className="artical-image">
                <img src={props.image.src} className="card-img-top h-100" alt="..." />
            </div>
            <div className="artical-title">{props.title}</div>
            <div className='artical-description'>{props.description}</div>
        </div>
    )
}
export default ArticalCard;