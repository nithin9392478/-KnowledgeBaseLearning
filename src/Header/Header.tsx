import './Header.css'
const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid gap-4">
          <div className="header-knowledge ">The Knowledge Base</div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
              <li className="nav-item">
                  <span className="header-nav">Home</span>
              </li>
              <li className="nav-item">
                  <span className="header-nav">Downloads</span>
              </li>
          </ul>
      </div>
  </nav>
    )
}
export default Header;