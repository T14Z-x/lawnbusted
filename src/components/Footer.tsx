import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, GoogleIcon, InstagramIcon } from "./BrandIcons";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.logo}>
              <Logo variant="light" size="lg" />
            </a>
            <p className={styles.tagline}>
              Central Alberta&apos;s premier lawn care company. Delivering pristine results,
              every single visit.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="LawnBusted on Facebook">
                <FacebookIcon size={15} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LawnBusted on Instagram">
                <InstagramIcon size={15} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LawnBusted on Google">
                <GoogleIcon size={15} />
              </a>
            </div>
          </div>

          {/* Links: Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.colList}>
              <li><a href="#services">Lawn Mowing</a></li>
              <li><a href="#services">Fertilization</a></li>
              <li><a href="#services">Weed Control</a></li>
              <li><a href="#services">Core Aeration</a></li>
              <li><a href="#services">Hedge Trimming</a></li>
              <li><a href="#services">Seasonal Cleanup</a></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.colList}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#blog">Lawn Care Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Links: Contact & Hours */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.colList}>
              <li>
                <a href="tel:+14035555296" className={styles.contactLink}>
                  <span className="icon-chip icon-chip--sm icon-chip--glass">
                    <Phone size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>(403) 555-5296</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@lawnbusted.com" className={styles.contactLink}>
                  <span className="icon-chip icon-chip--sm icon-chip--glass">
                    <Mail size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>hello@lawnbusted.com</span>
                </a>
              </li>
              <li>
                <span className={styles.contactLink}>
                  <span className="icon-chip icon-chip--sm icon-chip--glass">
                    <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>Red Deer, Central Alberta</span>
                </span>
              </li>
            </ul>
            <div className={styles.hours}>
              <p className={styles.hoursTitle}>
                <Clock size={13} strokeWidth={2} aria-hidden="true" />
                <strong>Business Hours</strong>
              </p>
              <p><strong>Mon – Fri:</strong> 7:00 AM – 7:00 PM</p>
              <p><strong>Sat:</strong> 8:00 AM – 5:00 PM</p>
              <p><strong>Sun:</strong> Closed</p>
            </div>
          </div>
        </div>

        {/* Huge aesthetic wordmark */}
        <div className={styles.wordmark}>LAWNBUSTED</div>

        {/* Bottom copyright & legal */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} LawnBusted. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">
              <span>Privacy Policy</span>
              <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#">
              <span>Terms of Service</span>
              <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#">
              <span>Sitemap</span>
              <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
