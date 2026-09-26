"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1800&q=85",
    alt: "Pristine green lawn and residential property",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85",
    alt: "Luxury home with a freshly manicured front lawn",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800&q=85",
    alt: "Freshly mowed lawn with clean mowing stripes",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=85",
    alt: "Lush green landscape after a seasonal cleanup",
  },
];

/** How long each slide holds before the backdrop advances. */
const SLIDE_MS = 6000;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getReducedMotion = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

const getReducedMotionOnServer = () => false;

export default function Hero() {
  const [slide, setSlide] = useState(0);

  // useSyncExternalStore subscribes to the media query without setState in an
  // effect, so a visitor who prefers reduced motion never sees the crossfade.
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );

  // Auto-advance. Keyed on `slide` so clicking a dot restarts the timer.
  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(
      () => setSlide((prev) => (prev + 1) % heroSlides.length),
      SLIDE_MS,
    );
    return () => clearTimeout(timer);
  }, [slide, reducedMotion]);

  return (
    <section className={styles.hero} id="hero">
      {/* Background layer — crossfading slides */}
      <div className={styles.bg}>
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            className={`${styles.slide} ${i === slide ? styles.slideActive : ""}`}
            aria-hidden={i !== slide}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              preload={i === 0}
              placeholder="empty"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Slider controls */}
      <div
        className={styles.dots}
        role="group"
        aria-label="Hero background images"
      >
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`${styles.dot} ${i === slide ? styles.dotActive : ""}`}
            onClick={() => setSlide(i)}
            aria-label={`Show background image ${i + 1} of ${heroSlides.length}`}
            aria-current={i === slide}
          />
        ))}
      </div>

      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          {/* Emotional delight: Live availability pill */}
          <div className={styles.availabilityBadge}>
            <span className={styles.pulseDot} />
            <span>Booking open for Central Alberta &bull; This Week</span>
          </div>

          <h1 className={styles.title}>
            Central Alberta<br />
            lawn care,{" "}
            <em className={styles.em}>
              done<br />right now.
            </em>
          </h1>

          <p className={styles.sub}>
            Professional mowing, trimming, fertilizing, and full-season plans —
            tailored to your property, starting this week.
          </p>

          <div className={styles.ctas}>
            <a href="#quote" className="btn btn-primary btn-lg">
              Get a Free Quote
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#how-it-works" className="btn btn-ghost-white btn-lg">
              <Play size={15} strokeWidth={2} aria-hidden="true" />
              See How It Works
            </a>
          </div>

          {/* Trust metrics */}
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <strong>500+</strong>
              <span>Happy Clients</span>
            </div>
            <div className={styles.trustDot} />
            <div className={styles.trustItem}>
              <strong>10 yrs</strong>
              <span>Experience</span>
            </div>
            <div className={styles.trustDot} />
            <div className={styles.trustItem}>
              <strong className={styles.ratingValue}>
                4.9
                <Star size={14} fill="currentColor" aria-hidden="true" />
              </strong>
              <span>Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
