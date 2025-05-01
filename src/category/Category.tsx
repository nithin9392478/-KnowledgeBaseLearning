import './Category.css'
import CategoryCard from './CategoryCard';
import categories from './CategoryData';
const Category = () => {
    return (
        <div className="activity d-flex justify-content-center align-items-center  flex-column gap-4">
            <div className="fs-4 fw-bold p-2">
                Articles by Category
                <div className='d-flex justify-content-center'><div className='category-border w-50'></div></div>
            </div>
            <div className='category col-sm-5 d-flex  flex-wrap gap-3'>
                {categories.map((category) => {
                    return (
                        <CategoryCard image={category.image} name={category.name} />
                    );

                })}

            </div>
            <div className='border-bottom border-3 w-100'></div>
        </div>
    )
}
export default Category;