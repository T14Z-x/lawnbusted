"use client";
import { useState } from "react";
import { MessageSquare, Phone, ChevronDown, ArrowRight } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "How do I get my instant quote?",
    a: "Simply enter your property address in our online estimate tool. We check your lot dimensions via high-resolution satellite imagery and send you an exact, guaranteed price in under 45 minutes — no annoying salesperson visits or phone tag required.",
  },
  {
    q: "Do I need to be home when the crew arrives?",
    a: "Not at all! As long as our crew has access to your front and back gates and pets are safely inside, we take care of everything. We send a text when on the way, plus timestamped before-and-after photos as soon as we finish.",
  },
  {
    q: "What is your 100% Satisfaction Guarantee?",
    a: "We take immense pride in our work. If you notice any missed spot, uneven trim, or clipping residue, let us know within 24 hours. A team will return and re-cut or touch up the area completely free of charge.",
  },
  {
    q: "Can I pause for vacations or skip visits without penalties?",
    a: "Yes! There are zero lock-in contracts. You can pause, skip a week, or adjust service frequency with a simple text to our dispatch line or through your customer portal at least 24 hours in advance.",
  },
  {
    q: "What communities in Central Alberta do you service?",
    a: "We currently provide weekly and seasonal routes in Red Deer, Sylvan Lake, Lacombe, Blackfalds, Ponoka, Innisfail, and surrounding acreage developments.",
  },
  {
    q: "Are your fertilizers and weed controls pet and kid safe?",
    a: "100% yes. We exclusively utilize eco-conscious, Health Canada registered products that are completely safe for dogs, cats, and barefoot kids once dried (typically within 60 to 90 minutes).",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={`${styles.layout} container`}>
        {/* Left Column */}
        <div className={styles.left}>
          <span className="eyebrow">Clear Answers</span>
          <h2 className="section-title">
            Frequently Asked<br />Questions
          </h2>
          <p className={styles.desc}>
            Everything you need to know about our scheduling, guarantees, and eco-friendly lawn care.
          </p>

          <div className={styles.contactCard}>
            <span className={`icon-chip icon-chip--lg ${styles.contactIcon}`}>
              <MessageSquare size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <strong className={styles.contactTitle}>Have a unique yard or question?</strong>
              <p className={styles.contactSub}>
                We answer texts and calls within minutes during daylight hours.
              </p>
              <div className={styles.contactButtons}>
                <a href="tel:4035555296" className="btn btn-primary btn-sm">
                  <Phone size={13} strokeWidth={2} aria-hidden="true" />
                  <span>Call (403) 555-5296</span>
                </a>
                <a href="#quote" className="btn btn-outline btn-sm">
                  <span>Instant Quote Form</span>
                  <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Accordion */}
        <div className={styles.right}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                data-reveal
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{f.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    <ChevronDown size={17} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
