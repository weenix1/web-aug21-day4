const MyNavBar = () => (
  <nav className="navbar navbar-expand-lg bg="dark" variant="dark" px-lg-5">
    <a className="navbar-brand" href="#">
      <img src="./img/Netflix_Logo_RGB.png" width={120} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">Backoffice</li>
      </ul>
      <ul className="list-unstyled text-white">
        <li className="d-inline-block align-middle mr-3">
          <i className="bi bi-search" />
        </li>
        <li
          className="d-inline-block align-middle mr-3"
          style={{ opacity: "0.75", fontWeight: 600 }}
        >
          KIDS
        </li>
        <li className="d-inline-block align-middle mr-3">
          <i className="bi bi-bell" />
        </li>
        <li className="d-inline-block align-middle">
          <div className="btn-group dropleft">
            <button
              type="button"
              className="btn text-white dropdown-toggle p-0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person" style={{ fontSize: "1.3rem" }} />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Romance
              </a>
              <a className="dropdown-item" href="#">
                Horror
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default MyNavBar;
