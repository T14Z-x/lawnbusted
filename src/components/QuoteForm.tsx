"use client";
import { useState, useEffect, useRef, FormEvent } from "react";
import {
  House,
  Building,
  Trees,
  Scissors,
  Sparkles,
  Leaf,
  Wind,
  Calendar,
  Crown,
  Check,
  ShieldCheck,
  Zap,
  Lock,
  Phone,
  ArrowRight,
  Star,
  Clock,
  Send,
} from "lucide-react";
import styles from "./QuoteForm.module.css";

const propertySizes = [
  { id: "small", label: "Small Yard", detail: "< 2,500 sq ft", icon: House },
  { id: "standard", label: "Standard Yard", detail: "~5,000 sq ft", icon: Building },
  { id: "large", label: "Acreage / Large", detail: "10,000+ sq ft", icon: Trees },
];

const serviceOptions = [
  { id: "mowing", label: "Lawn Mowing & Edging", icon: Scissors },
  { id: "fertilization", label: "Seasonal Fertilization", icon: Sparkles },
  { id: "weed", label: "Eco Weed Control", icon: Leaf },
  { id: "aeration", label: "Core Aeration", icon: Wind },
  { id: "cleanup", label: "Spring / Fall Cleanup", icon: Calendar },
  { id: "full", label: "Full Season Care Plan", icon: Crown },
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [size, setSize] = useState("standard");
  const [service, setService] = useState("mowing");
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Listen for address passed seamlessly from Hero section
  useEffect(() => {
    const handleAddressEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, address: customEvent.detail }));
        setHighlighted(true);
        setTimeout(() => setHighlighted(false), 2400);
      }
    };

    window.addEventListener("lawnQuoteAddress", handleAddressEvent);
    return () => {
      window.removeEventListener("lawnQuoteAddress", handleAddressEvent);
    };
  }, []);

  // Calculate dynamic instant estimate preview (Behavioral & Dopamine loop)
  const getEstimate = () => {
    if (service === "full") {
      if (size === "small") return "$139 – $169 / month";
      if (size === "standard") return "$189 – $229 / month";
      return "$289 – $369 / month";
    }
    if (service === "cleanup") {
      if (size === "small") return "$160 – $220 one-time";
      if (size === "standard") return "$220 – $290 one-time";
      return "$350 – $490 one-time";
    }
    if (service === "aeration") {
      if (size === "small") return "$89 – $110 one-time";
      if (size === "standard") return "$119 – $145 one-time";
      return "$175 – $220 one-time";
    }
    if (service === "fertilization" || service === "weed") {
      if (size === "small") return "$45 – $55 / application";
      if (size === "standard") return "$60 – $75 / application";
      return "$95 – $130 / application";
    }
    // Default mowing
    if (size === "small") return "$39 – $48 / visit";
    if (size === "standard") return "$49 – $62 / visit";
    return "$75 – $98 / visit";
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="quote">
      <div className={`${styles.layout} container`}>
        {/* Left info */}
        <div className={styles.left}>
          <span className="eyebrow">Instant Free Estimate</span>
          <h2 className="section-title">
            Get a tailored price<br />in under 60 seconds
          </h2>
          <p className={styles.desc}>
            No pushy sales calls, no waiting around. We verify your lot size via satellite
            and send your exact quote and schedule availability within 45 minutes.
          </p>

          <div className={styles.trustList}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <Check size={14} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <strong>Zero Credit Card Needed:</strong> See your exact price first with zero obligation.
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <ShieldCheck size={14} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <strong>100% Re-Mow Guarantee:</strong> Not 100% thrilled? We return and fix it for free within 24 hours.
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <Clock size={14} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <strong>Flexible &amp; Cancel Anytime:</strong> Pause for vacation or skip weeks in 1 tap.
              </div>
            </div>
          </div>

          {/* Social validation block */}
          <div className={styles.verifiedCard}>
            <div className={`star-row ${styles.verifiedStars}`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} strokeWidth={2} aria-hidden="true" />
              ))}
            </div>
            <p className={styles.verifiedQuote}>
              &ldquo;The easiest home service booking I&apos;ve ever experienced. Got my quote within 30 minutes, they mowed two days later.&rdquo;
            </p>
            <span className={styles.verifiedAuthor}>— David M., Red Deer Homeowner</span>
          </div>
        </div>

        {/* Right form / Interactive Price Engine */}
        <div className={styles.right}>
          {submitted ? (
            <div className={styles.successCard}>
              <div className={styles.successIcon}>
                <Check size={28} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <h3 className={styles.successTitle}>Quote Request Confirmed!</h3>
              <p className={styles.successText}>
                Thanks <strong>{formData.firstName || "there"}</strong>! We&apos;ve received your request for{" "}
                <strong>{formData.address || "your property"}</strong>.
              </p>

              {/* Cognitive ease: 3-step timeline reassurance */}
              <div className={styles.timeline}>
                <div className={styles.timelineStep}>
                  <span className={styles.timelineDotActive}>
                    <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Request Received</strong>
                    <span>Just now</span>
                  </div>
                </div>
                <div className={styles.timelineLine} />
                <div className={styles.timelineStep}>
                  <span className={styles.timelineDotActive}>
                    <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Satellite Lot Verification</strong>
                    <span>Underway (15–30 mins)</span>
                  </div>
                </div>
                <div className={styles.timelineLine} />
                <div className={styles.timelineStep}>
                  <span className={styles.timelineDot}>
                    <Send size={13} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Booking Confirmation</strong>
                    <span>Sent to {formData.email || "your email"}</span>
                  </div>
                </div>
              </div>

              <div className={styles.successActionRow}>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Property
                </button>
                <a href="tel:4035555296" className="btn btn-primary btn-sm">
                  <Phone size={14} strokeWidth={1.75} aria-hidden="true" />
                  <span>Need Today? Call (403) 555-5296</span>
                </a>
              </div>
            </div>
          ) : (
            <form
              ref={formRef}
              className={`${styles.card} ${highlighted ? styles.cardHighlighted : ""}`}
              onSubmit={handleSubmit}
            >
              <div className={styles.formHeader}>
                <div>
                  <h3 className={styles.cardTitle}>Calculate Your Estimate</h3>
                  <p className={styles.cardSubtitle}>
                    Customize options to view instant ballpark rates
                  </p>
                </div>
                <span className={styles.liveIndicator}>
                  <Zap size={13} strokeWidth={2} aria-hidden="true" />
                  <span>Fast dispatch</span>
                </span>
              </div>

              {/* Step 1: Tactile Property Size Selector */}
              <div className={styles.sectionBlock}>
                <label className={styles.sectionLabel}>
                  1. Select Approximate Property Size
                </label>
                <div className={styles.sizeGrid}>
                  {propertySizes.map((sz) => {
                    const IconComp = sz.icon;
                    return (
                      <button
                        key={sz.id}
                        type="button"
                        className={`${styles.sizeCard} ${size === sz.id ? styles.sizeCardActive : ""}`}
                        onClick={() => setSize(sz.id)}
                      >
                        <span className={styles.sizeIcon}>
                          <IconComp size={18} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <strong className={styles.sizeTitle}>{sz.label}</strong>
                        <span className={styles.sizeDetail}>{sz.detail}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Tactile Service Pills */}
              <div className={styles.sectionBlock}>
                <label className={styles.sectionLabel}>
                  2. Select Main Service Needed
                </label>
                <div className={styles.serviceChips}>
                  {serviceOptions.map((srv) => {
                    const IconComp = srv.icon;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        className={`${styles.chip} ${service === srv.id ? styles.chipActive : ""}`}
                        onClick={() => setService(srv.id)}
                      >
                        <IconComp size={14} strokeWidth={2} aria-hidden="true" />
                        <span>{srv.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Instant Dynamic Price Calculation Box */}
              <div className={styles.estimateBanner}>
                <div className={styles.estimateIconWrap}>
                  <Zap size={16} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div className={styles.estimateDetails}>
                  <div className={styles.estimateRow}>
                    <span className={styles.estimateLabel}>Estimated Rate:</span>
                    <strong className={styles.estimateVal}>{getEstimate()}</strong>
                  </div>
                  <p className={styles.estimateNote}>
                    Based on Central Alberta averages &middot; Finalized automatically after address check
                  </p>
                </div>
              </div>

              {/* Step 3: Contact & Address Details */}
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="e.g. Sarah"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className={styles.group}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="e.g. Miller"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className={styles.group}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(403) 555-0199"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label htmlFor="address">Property Address *</label>
                <input
                  id="address"
                  type="text"
                  required
                  placeholder="Street, City, Postal Code"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="message">Special Instructions (Optional)</label>
                <textarea
                  id="message"
                  rows={2}
                  placeholder="Gate code, pets in yard, overgrown grass, or specific instructions…"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg">
                <span>Lock In My Free Quote</span>
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </button>

              <div className={styles.footerBadges}>
                <span className={styles.footerBadgeItem}>
                  <Lock size={12} strokeWidth={2} aria-hidden="true" /> Safe &amp; Confidential
                </span>
                <span>•</span>
                <span className={styles.footerBadgeItem}>
                  <ShieldCheck size={12} strokeWidth={2} aria-hidden="true" /> 100% Satisfaction Guarantee
                </span>
                <span>•</span>
                <span>Zero Spam Policy</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
