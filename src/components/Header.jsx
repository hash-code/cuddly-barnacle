import { useState, useRef, useEffect } from 'react';

export default function Header({ fontSize, onFontSizeChange }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className="tricolour-bar header-stripes">
        <span className="strip strip-purple" />
        <span className="strip strip-saffron" />
        <span className="strip strip-white" />
        <span className="strip strip-green" />
      </div>
      <header className="header header-with-bg">
        <div className="header-inner">
          <div className="logo-section">
            <img
              src="/crs-logo.png"
              alt="Registrar General, India"
              className="crs-logo-img"
            />
            <div className="crs-brand">
              <h1>Birth & Death Registration</h1>
              <p className="tagline">
                Office of the Registrar General & Census Commissioner, India
                <br />
                Ministry of Home Affairs
              </p>
            </div>
            <img
              src="/azadi-logo.png"
              alt="Azadi Ka Amrit Mahotsav"
              className="azadi-logo-img"
            />
          </div>
          <div className="header-center-emblem">
            <img
              src="/emblem.png"
              alt="National Emblem of India - Satyameva Jayate"
              className="emblem-img"
            />
          </div>
          <div className="header-utils">
            <div className="font-size-controls" aria-label="Text size">
              <button
                type="button"
                className="btn-util"
                onClick={() => onFontSizeChange('small')}
              >
                A-
              </button>
              <button
                type="button"
                className="btn-util"
                onClick={() => onFontSizeChange('medium')}
              >
                A
              </button>
              <button
                type="button"
                className="btn-util"
                onClick={() => onFontSizeChange('large')}
              >
                A+
              </button>
            </div>
            <button type="button" className="btn-util btn-dark-mode" aria-label="Dark mode">
              <span className="icon-moon">🌙</span>
            </button>
            <div className="login-dropdown" ref={loginRef}>
              <button
                type="button"
                className="btn-login"
                aria-expanded={loginOpen}
                aria-haspopup="true"
                onClick={() => setLoginOpen((o) => !o)}
              >
                Login <span className="arrow">▼</span>
              </button>
              <div className="login-menu" hidden={!loginOpen}>
                <a href="#/">Reg. Functionaries / Institution</a>
                <a href="#/">General Public</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
