
interface CategoryCardProps {
    image: { src: string, alt: string };
    name: string;
}
const CategoryCard = (props: CategoryCardProps) => {
    return (
        <>
            {/* <div className="col-lg-2 col-sm-3 card card-height d-flex justify-content-center align-items-center">
                <img className="w-100" src={props.image.src} alt="card" />
            </div> */}
            <div>
                <div className="w-100 ">
                    <div className="card card-height   d-flex justify-content-center align-items-center">
                        <img className="w-100" src={props.image.src} alt={props.image.alt} />
                    </div>
                    <div className="text-center category-text">{props.name}</div>
                </div>
            </div>
        </>
            

    )
}

export default CategoryCard;