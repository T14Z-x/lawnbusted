import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Leaf,
  Scissors,
  Shrub,
  Wind,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Lawn Mowing",
    desc: "Regular professional mowing with edge trimming and full cleanup — leaving your lawn sharp and healthy every visit.",
    tag: "Most Popular",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
    icon: Scissors,
  },
  {
    title: "Fertilization",
    desc: "Customized feeding programs that deliver the exact nutrients your grass needs for deep green growth all season.",
    img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=700&q=80",
    icon: Droplets,
  },
  {
    title: "Hedge Trimming",
    desc: "Clean, precise shaping of hedges, shrubs, and ornamentals — keeping your property boundaries looking crisp.",
    img: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=700&q=80",
    icon: Shrub,
  },
  {
    title: "Weed Control",
    desc: "Targeted, eco-friendly treatments that eliminate invasive plants without harming your lawn or the environment.",
    img: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=700&q=80",
    icon: FlaskConical,
  },
  {
    title: "Core Aeration",
    desc: "Relieve soil compaction and improve root health with professional core aeration — a game-changer every spring.",
    img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=700&q=80",
    icon: Wind,
  },
  {
    title: "Seasonal Cleanup",
    desc: "Spring and fall packages including leaf removal, bed edging, debris hauling, and full property restoration.",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={`section-header section-header--center`}>
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
            Everything your<br />property needs
          </h2>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            From quick mows to complete seasonal care — every corner of your yard covered.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => {
            const IconComp = s.icon;
            return (
              <article key={s.title} className={styles.card} data-reveal>
                <div className={styles.imgWrap}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    placeholder="empty"
                  />
                  <span className={styles.imgScrim} aria-hidden="true" />
                  {s.tag && <span className={styles.tag}>{s.tag}</span>}
                  {/* Icon chip straddles the image edge — anchors the card visually */}
                  <span className={`icon-chip ${styles.cardChip}`}>
                    <IconComp size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <a href="#quote" className={`btn btn-outline btn-sm ${styles.cardBtn}`}>
                    <span>Book Now</span>
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.cta}>
          <a href="#quote" className="btn btn-dark btn-lg">
            <span>Book Any Service</span>
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
