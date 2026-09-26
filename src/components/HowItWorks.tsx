import { CalendarDays, Calculator, Check, Heart, Truck } from "lucide-react";
import Image from "next/image";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    icon: Calculator,
    title: "Get Your Free Quote",
    desc: "Enter your address online. Our system gives you an instant price — no waiting, no sales calls required.",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Choose Your Plan",
    desc: "Pick one-time or recurring. Flexible schedules, transparent pricing, cancel anytime with no penalties.",
  },
  {
    num: "03",
    icon: Truck,
    title: "We Show Up & Deliver",
    desc: "Our licensed crew arrives on time. You'll receive a notification on the way and before-and-after photos when done.",
  },
  {
    num: "04",
    icon: Heart,
    title: "Love Your Lawn",
    desc: "Sit back and enjoy your space. We handle all the hard work so you can focus on what matters most.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <div className={`section-header`}>
          <span className="eyebrow">The Process</span>
          <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
            Simple from start<br />to finish
          </h2>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            Four easy steps — and a beautiful lawn waiting on the other side.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Steps */}
          <div className={styles.steps}>
            {steps.map((s, i) => {
              const IconComp = s.icon;
              return (
                <div key={s.num} className={styles.step} data-reveal>
                  <div className={styles.numCol}>
                    <span className={styles.num}>{s.num}</span>
                    {i < steps.length - 1 && (
                      <span className={styles.connector} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.stepBody}>
                    <div className={styles.stepHead}>
                      <span className="icon-chip icon-chip--sm">
                        <IconComp size={14} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                    </div>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual */}
          <div className={styles.visual}>
            <div className={styles.imgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85"
                alt="Luxury residential property with manicured lawn"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                placeholder="empty"
              />
            </div>
            {/* Floating notification cards */}
            <div className={styles.notifA}>
              <span className="icon-chip">
                <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className={styles.notifTitle}>Next Visit</p>
                <p className={styles.notifSub}>Thu, Sep 18 · 9:00 AM</p>
              </div>
            </div>
            <div className={styles.notifB}>
              <span className="icon-chip">
                <Check size={17} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <div>
                <p className={styles.notifTitle}>Service Complete</p>
                <p className={styles.notifSub}>Mow + Edge Trim · 45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
