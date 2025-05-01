import './QuickHelp.css'
const QuickHelp = () => {
    return (
        <div className="col-sm-3 p-3 d-flex flex-column  gap-3 border quick-help">
            <div className='fs-4 fw-bold d-flex'>
                <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                Quick help
            </div>
            <div className='d-flex flex-column  gap-3'>
                <div className=''><input type="text" className="search-input form-control" placeholder="Search for articles, topics, or keywords..." /></div>
                <div className='px-2 d-flex gap-2 flex-column help-font'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-2 d-flex gap-2 flex-column help-font'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-2 d-flex gap-2 flex-column help-font'>
                    help web hosting services domain management
                    <div className='quick-border'></div>
                </div>
                <div className='px-2 d-flex gap-2 flex-column help-font'>
                    help web hosting services domain management
                </div>
            </div>
        </div>
    )
}
export default QuickHelp;