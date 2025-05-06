
import './Category.css'
interface CategoryCardProps {
    image: { src: string, alt: string };
    name: string;
    id: number;
}
const CategoryCard = (props: CategoryCardProps) => {
    return (
        <>
            <div className="select-card hvr-bounce-in" key={props.id}>
                <div className="w-100 d-flex flex-column gap-1">
                    <div className='w-100 shadow border category-border'>
                    <div className="card-height d-flex justify-content-center align-items-center">
                        <img className="w-100" src={props.image.src} alt={props.image.alt} />
                    </div>
                    </div>
                    <div className="text-center fw-bold category-text">{props.name}</div>
                </div>
            </div>
        </>


    )
}

export default CategoryCard;