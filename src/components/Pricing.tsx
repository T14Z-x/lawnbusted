"use client";
import { useState } from "react";
import {
  ArrowRight,
  Camera,
  Check,
  MessageSquare,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "seasonal">("monthly");

  const plans = [
    {
      name: "Basic",
      price: period === "monthly" ? "79" : "299",
      unit: period === "monthly" ? "/visit" : "/season",
      desc: "Perfect for homeowners who want tidy, reliable mowing on a schedule.",
      featured: false,
      features: [
        { text: "Bi-weekly lawn mowing", included: true },
        { text: "Edge trimming", included: true },
        { text: "Clipping cleanup", included: true },
        { text: "Before & after photos", included: true },
        { text: "Fertilization", included: false },
        { text: "Weed control", included: false },
      ],
    },
    {
      name: "Standard",
      badge: "Most Popular",
      price: period === "monthly" ? "149" : "549",
      unit: period === "monthly" ? "/month" : "/season",
      desc: "Our most popular plan — full lawn care for a consistently beautiful yard.",
      featured: true,
      features: [
        { text: "Weekly lawn mowing", included: true },
        { text: "Edge trimming & cleanup", included: true },
        { text: "Seasonal fertilization", included: true },
        { text: "Weed spot treatment", included: true },
        { text: "Before & after photos", included: true },
        { text: "Aeration & overseed", included: false },
      ],
    },
    {
      name: "Premium",
      price: period === "monthly" ? "249" : "899",
      unit: period === "monthly" ? "/month" : "/season",
      desc: "Full-service lawn management for the property owner who wants it all.",
      featured: false,
      features: [
        { text: "Weekly lawn mowing", included: true },
        { text: "Edge trimming & cleanup", included: true },
        { text: "Full fertilization program", included: true },
        { text: "Complete weed control", included: true },
        { text: "Core aeration & overseed", included: true },
        { text: "Seasonal cleanup (spring/fall)", included: true },
      ],
    },
  ];

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow" style={{ color: "var(--accent-lt)" }}>
            Our Packages
          </span>
          <h2 className={`section-title ${styles.title}`}>
            Select a lawn management<br />plan that works for you
          </h2>
          <p className={styles.sub}>
            Transparent pricing, no hidden fees. Cancel or change plans anytime.
          </p>

          <div className={styles.toggleWrap}>
            <button
              className={`${styles.toggleBtn} ${period === "monthly" ? styles.toggleActive : ""}`}
              onClick={() => setPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${period === "seasonal" ? styles.toggleActive : ""}`}
              onClick={() => setPeriod("seasonal")}
            >
              Seasonal <span className={styles.savePill}>Save 15%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.cardFeatured : ""}`}
              data-reveal
            >
              {p.badge && <span className={styles.badge}>{p.badge}</span>}
              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{p.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>{p.price}</span>
                  <span className={styles.unit}>{p.unit}</span>
                </div>
                <p className={styles.desc}>{p.desc}</p>
              </div>

              <ul className={styles.features}>
                {p.features.map((f, i) => (
                  <li
                    key={i}
                    className={`${styles.featureItem} ${!f.included ? styles.featureDisabled : ""}`}
                  >
                    <span className={styles.featureIcon}>
                      {f.included ? (
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                      ) : (
                        <X size={14} strokeWidth={2} aria-hidden="true" />
                      )}
                    </span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={`btn ${p.featured ? "btn-primary" : "btn-outline-white"} btn-full`}
              >
                <span>Get Started</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance Guarantee Bar */}
        <div className={styles.guaranteeBar}>
          <div className={styles.guaranteeItem}>
            <span className={`icon-chip icon-chip--lg icon-chip--glass ${styles.guaranteeIcon}`}>
              <ShieldCheck size={21} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <strong>100% Re-Mow Guarantee</strong>
              <p>If not completely satisfied, we re-cut within 24h free.</p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={`icon-chip icon-chip--lg icon-chip--glass ${styles.guaranteeIcon}`}>
              <Zap size={21} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <strong>Zero Contracts &amp; Easy Pause</strong>
              <p>Skip weeks or cancel anytime via quick text or portal.</p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={`icon-chip icon-chip--lg icon-chip--glass ${styles.guaranteeIcon}`}>
              <Camera size={21} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <strong>Before &amp; After Photo Proof</strong>
              <p>Every single visit documented and sent right to your phone.</p>
            </div>
          </div>
        </div>

        <p className={styles.note}>
          <MessageSquare size={15} strokeWidth={2} className={styles.noteIcon} aria-hidden="true" />
          <span>Not sure which plan is right for you?{" "}</span>
          <a href="#quote" className={styles.noteLink}>
            Chat with us
          </a>{" "}
          <span>and we&apos;ll recommend the best fit for your property.</span>
        </p>
      </div>
    </section>
  );
}
