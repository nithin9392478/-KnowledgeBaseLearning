import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className="search-image d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex align-items-center justify-content-center text-light fs-2 fw-bold">Search all KB articals</div>
            <div className="w-75 px-3">
                <div className="search-input-container">
                    <i className="bi bi-search search-icon text-dark"></i>
                    <input type="text" className="search-input form-control px-5" placeholder="Search for articles, topics, or keywords..." />
                </div>
            </div>
    </div>
  )
}
export default SearchBox;
