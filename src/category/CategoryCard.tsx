
import './Category.css'
interface CategoryCardProps {
    image: { src: string, alt: string };
    name: string;
}
const CategoryCard = (props: CategoryCardProps) => {
    return (
        <>
            <div className="select-card">
                <div className="w-100 ">
                    <div className='w-100 shadow border category-border'>
                    <div className="card-height   d-flex justify-content-center align-items-center">
                        <img className="w-100" src={props.image.src} alt={props.image.alt} />
                    </div>
                    </div>
                    <div className="text-center category-text">{props.name}</div>
                </div>
            </div>
        </>


    )
}

export default CategoryCard;