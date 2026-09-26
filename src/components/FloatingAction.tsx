"use client";
import { useState, useEffect } from "react";
import { Phone, Zap, ArrowUp } from "lucide-react";
import styles from "./FloatingAction.module.css";

export default function FloatingAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className={styles.floatingBar}>
      <a href="tel:4035555296" className={styles.phoneBtn} title="Call LawnBusted">
        <Phone size={14} strokeWidth={2} aria-hidden="true" />
        <span className={styles.phoneText}>Call Crew</span>
      </a>
      <a href="#quote" className={styles.quoteBtn}>
        <Zap size={13} strokeWidth={2.4} aria-hidden="true" />
        <span>Get Quote</span>
      </a>
      <button
        type="button"
        className={styles.topBtn}
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={15} strokeWidth={2.2} aria-hidden="true" />
      </button>
    </div>
  );
}
