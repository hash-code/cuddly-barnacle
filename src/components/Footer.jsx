import { useState, useEffect } from 'react';

function formatDateTime(date) {
  const options = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return date.toLocaleString('en-IN', options);
}

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = currentTime.getFullYear();

  const logos = [
    { label: 'data.gov.in', sub: 'Open Government Data (OGD) Platform India' },
    { label: 'india.gov.in', sub: 'The national portal of India' },
    { label: 'PM INDIA' },
    { label: 'MAKE IN INDIA' },
    { label: 'Digital India', sub: 'Power To Empower' },
    { label: 'my GOV', sub: 'मेरी सरकार' },
    { label: '2025 International Year of Cooperatives', sub: 'Cooperatives Build a Better World' },
  ];

  const primaryLinks = [
    'Website Policy',
    'Mobile App Privacy Policy',
    'Terms & Conditions',
    'Accessibility Statement',
    'Web Information Manager',
  ];

  const secondaryLinks = [
    'Feedback',
    'Sitemap',
    'Contact Us',
    'Vacancies',
    'Product & Services',
    'Pricing',
    'Cancellation Policy',
    'Grievance Management Policy',
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logos">
          {logos.map((item, i) => (
            <a key={i} href="#/" className="footer-logo-item">
              <span className="logo-label">{item.label}</span>
              {item.sub && <span className="logo-sublabel">{item.sub}</span>}
            </a>
          ))}
        </div>
        <div className="footer-links-primary">
          {primaryLinks.map((text, i) => (
            <span key={i}>
              {i > 0 && <span className="link-sep">|</span>}
              <a href="#/">{text}</a>
            </span>
          ))}
        </div>
        <div className="footer-links-secondary">
          {secondaryLinks.map((text, i) => (
            <span key={i}>
              {i > 0 && <span className="link-sep">|</span>}
              <a href="#/">{text}</a>
            </span>
          ))}
        </div>
        <p className="footer-updated">Last Updated: 30-01-2024 12:16:17</p>
        <p className="footer-developed">
          Website Developed & Maintained by Office of the Registrar General & Census Commissioner,
          India
        </p>
        <p className="copyright">
          © {currentYear} - The Registrar General & Census Commissioner, India - Ⓒ {formatDateTime(currentTime)}
        </p>
      </div>
    </footer>
  );
}
