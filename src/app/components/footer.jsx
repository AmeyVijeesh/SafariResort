'use client';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerBrand">
          <h3 className="footerLogo">Zarari.</h3>
          <p className="footerTagline">Where wilderness whispers</p>
        </div>

        <div className="footerLinks">
          <div className="footerCol">
            <h4 className="footerHeading">Experience</h4>
            <a href="#" className="footerLink">
              Suites
            </a>
            <a href="#" className="footerLink">
              Safari
            </a>
            <a href="#" className="footerLink">
              Dining
            </a>
            <a href="#" className="footerLink">
              Wellness
            </a>
          </div>

          <div className="footerCol">
            <h4 className="footerHeading">Plan</h4>
            <a href="#" className="footerLink">
              Reservations
            </a>
            <a href="#" className="footerLink">
              Rates
            </a>
            <a href="#" className="footerLink">
              Getting Here
            </a>
            <a href="#" className="footerLink">
              Contact
            </a>
          </div>

          <div className="footerCol">
            <h4 className="footerHeading">Connect</h4>
            <a href="#" className="footerLink">
              Instagram
            </a>
            <a href="#" className="footerLink">
              Facebook
            </a>
            <a href="#" className="footerLink">
              Newsletter
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCopy">© 2025 Zarari. All rights reserved.</p>
        <div className="footerLegal">
          <a href="#" className="footerLegalLink">
            Privacy
          </a>
          <span className="footerDivider">·</span>
          <a href="#" className="footerLegalLink">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
