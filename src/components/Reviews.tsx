"use client";
import { useState } from "react";
import {
  CalendarDays,
  Check,
  Clock,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { GoogleIcon } from "./BrandIcons";
import styles from "./Reviews.module.css";

const categories = [
  { id: "all", label: "All Reviews (320+)" },
  { id: "mowing", label: "Weekly Mowing" },
  { id: "seasonal", label: "Seasonal Cleanups" },
  { id: "fertilization", label: "Lawn Restoration" },
];

const reviews = [
  {
    category: "mowing",
    name: "James Mitchell",
    location: "Red Deer (Oriole Park)",
    meta: "Verified Homeowner · 2 weeks ago",
    initials: "JM",
    avatarBg: "var(--forest-800)",
    tag: "Saved My Weekends",
    icon: Clock,
    text: "Absolutely blown away by the quality. Our lawn has never looked this good. They showed up on time, worked efficiently, and left everything spotless. I get my entire Saturday back now!",
  },
  {
    category: "mowing",
    name: "Sarah Lawson",
    location: "Sylvan Lake (Cottage Area)",
    meta: "Verified Homeowner · 1 month ago",
    initials: "SL",
    avatarBg: "var(--forest-600)",
    tag: "Razor-Sharp Edging",
    icon: Sparkles,
    text: "I've tried three other lawn care companies over the years and none of them compare to LawnBusted. The attention to detail is exceptional — they even trimmed around my stone garden beds with surgical precision.",
  },
  {
    category: "fertilization",
    name: "Robert Thompson",
    location: "Lacombe",
    meta: "Verified Homeowner · 3 weeks ago",
    initials: "RT",
    avatarBg: "var(--forest-700)",
    tag: "Deep Emerald Green",
    icon: Leaf,
    text: "Best investment I've made for my property. The pricing is completely transparent, the team is polite and licensed, and results speak for themselves. Three different neighbours have asked for their contact!",
  },
  {
    category: "mowing",
    name: "Maria Peterson",
    location: "Blackfalds",
    meta: "Verified Homeowner · 1 week ago",
    initials: "MP",
    avatarBg: "var(--accent-dk)",
    tag: "60-Sec Booking",
    icon: Check,
    text: "Super easy to book online, got a quote in 60 seconds and they were at my place within 2 days. The before and after photos sent to my phone were so satisfying. 10/10 recommend.",
  },
  {
    category: "seasonal",
    name: "David Kim",
    location: "Red Deer County (Acreage)",
    meta: "Verified Homeowner · 5 days ago",
    initials: "DK",
    avatarBg: "var(--forest-500)",
    tag: "Turnkey Yard Cleanup",
    icon: CalendarDays,
    text: "The seasonal cleanup package is worth every penny. They raked, edged, aerated, and hauled away 12 bags of debris without leaving a trace. Incredibly professional and polite crew.",
  },
  {
    category: "seasonal",
    name: "Angela Clarke",
    location: "Ponoka",
    meta: "Verified Homeowner · 2 months ago",
    initials: "AC",
    avatarBg: "var(--accent)",
    tag: "Dependable 2nd Season",
    icon: ShieldCheck,
    text: "Been using LawnBusted for two full seasons now. Consistently excellent results every single visit. Their customer service is also top-notch — always responsive, kind, and easy to communicate with.",
  },
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReviews =
    activeTab === "all"
      ? reviews
      : reviews.filter((r) => r.category === activeTab);

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Genuine Community Feedback</span>
            <h2 className="section-title">
              What your Alberta<br />neighbours are saying
            </h2>
          </div>

          <div className={styles.summary}>
            <div className={styles.scoreRow}>
              <span className={styles.scoreNum}>4.9</span>
              <div>
                <div className={`star-row ${styles.stars}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} strokeWidth={2} aria-hidden="true" />
                  ))}
                </div>
                <span className={styles.scoreCount}>Based on 320+ verified reviews</span>
              </div>
            </div>
            <div className={styles.platforms}>
              <span className={styles.platformItem}>
                5.0 <GoogleIcon size={13} /> Google
              </span>
              <span className={styles.platformItem}>
                4.9 <Star size={11} strokeWidth={2} className={styles.inlineStar} /> BBB
              </span>
              <span className={styles.platformItem}>
                5.0 <Star size={11} strokeWidth={2} className={styles.inlineStar} /> HomeAdvisor
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className={styles.filterRow}>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`${styles.filterBtn} ${activeTab === c.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveTab(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredReviews.map((r, i) => {
            const IconComp = r.icon;
            return (
              <div key={i} className={styles.card} data-reveal>
                <div className={styles.cardTopRow}>
                  <span className={styles.reviewTag}>
                    <IconComp size={12} strokeWidth={2} aria-hidden="true" />
                    <span>{r.tag}</span>
                  </span>
                  <span className={styles.verifiedBadge}>
                    <ShieldCheck size={12} strokeWidth={2} aria-hidden="true" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className={styles.cardHeader}>
                  <div className={styles.avatar} style={{ background: r.avatarBg }}>
                    {r.initials}
                  </div>
                  <div>
                    <h3 className={styles.name}>{r.name}</h3>
                    <p className={styles.location}>{r.location}</p>
                    <p className={styles.meta}>{r.meta}</p>
                  </div>
                </div>
                <div className={`star-row ${styles.stars}`}>
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} strokeWidth={2} aria-hidden="true" />
                  ))}
                </div>
                <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
