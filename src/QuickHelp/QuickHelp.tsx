import './QuickHelp.css'
const QuickHelp = () => {
    return (
        <div className="col-sm-3 d-flex flex-column  gap-3 border quick-help">
            <div className='fs-4 fw-bold px-3 d-flex'>
                <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                Quick help
            </div>
            <div className='d-flex flex-column  gap-3'>
                <div className='px-3'><input type="text" className="search-input form-control" placeholder="Search for articles, topics, or keywords..." /></div>
                <div className='px-4 d-flex gap-2 flex-column'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-4 d-flex gap-2 flex-column'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-4 d-flex gap-2 flex-column'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-4 d-flex gap-2 flex-column'>
                    help web hosting services domain management
                </div>
            </div>
        </div>
    )
}
export default QuickHelp;