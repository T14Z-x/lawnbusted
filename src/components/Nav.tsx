"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  MessageSquare,
  Phone,
  Scissors,
  Star,
} from "lucide-react";
import Logo from "./Logo";
import styles from "./Nav.module.css";

const links = [
  { id: "services", label: "Services", href: "#services", icon: Scissors },
  { id: "how-it-works", label: "How It Works", href: "#how-it-works", icon: Calculator },
  { id: "reviews", label: "Reviews", href: "#reviews", icon: Star },
  { id: "pricing", label: "Pricing", href: "#pricing", icon: BadgeCheck },
  { id: "faq", label: "FAQ", href: "#faq", icon: MessageSquare },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* Swap to the solid island as soon as the hero starts scrolling away.
     Read the position on mount too, so a reload mid-page is correct. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy — highlight whichever section sits in the middle of the screen. */
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(`#${current.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Drawer: lock the page, close on Escape, and get out of the way on resize. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={styles.header}>
      <nav className={`${styles.bar} container`} aria-label="Main">
        <div className={`${styles.pill} ${solid ? styles.pillSolid : ""}`}>
          <a href="#hero" className={styles.logo} aria-label="LawnBusted — home">
            <Logo variant={solid ? "dark" : "light"} />
          </a>

          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                  aria-current={active === l.href ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="tel:+14035555296" className={styles.phone}>
              <Phone size={14} strokeWidth={2} aria-hidden="true" />
              <span>(403) 555-5296</span>
            </a>
            <a href="#quote" className={`btn btn-primary btn-sm ${styles.cta}`}>
              <span>Free Quote</span>
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div
            className={styles.scrim}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className={styles.drawer}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <ul className={styles.drawerList}>
              {links.map((l) => {
                const IconComp = l.icon;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={`${styles.drawerLink} ${
                        active === l.href ? styles.drawerLinkActive : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className={`icon-chip icon-chip--sm ${styles.drawerChip}`}>
                        <IconComp size={15} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span>{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className={styles.drawerFoot}>
              <a href="tel:+14035555296" className="btn btn-outline-dark btn-full">
                <Phone size={14} strokeWidth={2} aria-hidden="true" />
                <span>Call (403) 555-5296</span>
              </a>
              <a
                href="#quote"
                className="btn btn-primary btn-full"
                onClick={() => setOpen(false)}
              >
                <span>Get Free Quote</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}