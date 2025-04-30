import QuickHelp from '../QuickHelp/QuickHelp';
import './Artical.css'
import ArticalCard from './ArticalCard';
import ArticalData from './ArticalData';
import ArticalNavigation from './ArticalNavigation';
const Artical = () => {
    return(
        <div className="d-flex justify-content-between">
            <div className="col-sm-8">
                <div className='d-flex justify-content-end'>
                <div className="col-sm-11 fs-4 fw-bold d-flex">
                    <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                    IT Articles Category
                </div>
                </div>
                <div className="row d-flex justify-content-end align-items-center flex-wrap gap-3">
                    <div className="col-sm-11 d-flex  aligin-items-center gap-2 ">
                        {
                            ArticalNavigation.map((artical)=>{
                                return(
                                    <div className='artical-header px-3 d-flex justify-content-center align-items-center'>{artical.title}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-end'>
                    <div className='col-sm-11 d-flex flex-wrap align-items-center gap-3'>
                    {ArticalData.map((artical) => {
                        return (
                            <ArticalCard image={artical.image} title={artical.heading1} description={artical.heading2}/>
                        );
                    })}
                    </div>
                </div>
            </div>
            <QuickHelp />
        </div>
    )
}
export default Artical;


