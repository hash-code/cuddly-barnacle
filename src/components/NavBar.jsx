export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <a href="#/">Home</a>
        <a href="#/">About CRS</a>
        <div className="nav-dropdown">
          <button type="button" className="nav-link">
            RBD Act and Model Rules <span className="arrow">▼</span>
          </button>
          <div className="nav-menu" hidden />
        </div>
        <a href="#/">Circulars</a>
        <div className="nav-dropdown">
          <button type="button" className="nav-link">
            Forms <span className="arrow">▼</span>
          </button>
          <div className="nav-menu" hidden />
        </div>
        <a href="#/">Training Manuals</a>
        <div className="nav-dropdown">
          <button type="button" className="nav-link">
            FAQs <span className="arrow">▼</span>
          </button>
          <div className="nav-menu" hidden />
        </div>
        <a href="#/">How To Apply</a>
      </div>
    </nav>
  );
}
