import ResourceCard from './ResourceCard';
import ResourceData from './ResourceData';
import './Resources.css'
const Resources = () => {
    return (
        <div className='d-flex justify-content-end pt-3'>
            <div className="col-sm-11 d-flex justify-content-end  flex-column gap-2">
                <div className="fs-4 fw-bold d-flex">
                    <div className='d-flex justify-content-center'><div className='resource-border h-100'></div></div>
                    TOP RESOURCES
                </div>
                <div className="">
                    <input type="text" className="search-input form-control" placeholder="Search for articles, topics, or keywords..." />
                </div>
                <div className='d-flex flex-wrap align-items-center   gap-1 mx-1'>
                    {
                        ResourceData.map((resource) => {
                            return (
                                <ResourceCard image={resource.icon} name={resource.name} color={resource.backgroundColor}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Resources;