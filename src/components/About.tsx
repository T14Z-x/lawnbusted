import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import styles from "./About.module.css";

const checks = [
  "Satisfaction guaranteed on every visit",
  "Flexible scheduling — weekly, bi-weekly, or monthly",
  "Same licensed crew every time",
  "Instant online quote in under 60 seconds",
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={`${styles.grid} container`}>
        {/* Image block */}
        <div className={styles.imageBlock} data-reveal>
          <div className={styles.mainImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&q=85"
              alt="Lawn care specialist working on turf"
              fill
              sizes="50vw"
              style={{ objectFit: "cover" }}
              placeholder="empty"
            />
          </div>
          <div className={styles.subImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
              alt="Crisp manicured lawn stripes"
              fill
              sizes="(max-width: 560px) 140px, 175px"
              style={{ objectFit: "cover" }}
              placeholder="empty"
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>10+</span>
            <span className={styles.badgeTxt}>
              Years of
              <br />
              Excellence
            </span>
          </div>
        </div>

        {/* Text */}
        <div className={styles.text} data-reveal>
          <span className="eyebrow">About LawnBusted</span>
          <h2 className={`section-title ${styles.title}`}>
            Lawn care that
            <br />
            goes the extra mile
          </h2>
          <p className={`section-body ${styles.body}`}>
            We&apos;re a locally owned company serving Central Alberta homeowners and
            businesses. From weekly mowing to full-season packages, our certified team
            delivers pristine results — every single visit.
          </p>
          <p className={`section-body ${styles.body} ${styles.bodySpaced}`}>
            We use premium equipment, eco-conscious products, and proven techniques
            to keep your outdoor space looking its best, no matter the season.
          </p>

          <ul className={styles.list}>
            {checks.map((c) => (
              <li key={c} className={styles.listItem}>
                <span className={styles.check}>
                  <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <a href="#quote" className="btn btn-dark btn-lg">
              <span>Book a Service</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#reviews" className="btn btn-outline">
              <span>See Reviews</span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}