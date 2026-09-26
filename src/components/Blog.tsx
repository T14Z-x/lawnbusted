import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import styles from "./Blog.module.css";

const articles = [
  {
    title: "The Best Time to Mow Your Lawn: What Most Homeowners Get Wrong",
    desc: "Timing your mowing correctly can be the difference between a thriving lawn and one that struggles through summer. Here's the complete guide.",
    date: "September 10, 2026",
    readTime: "6 min read",
    category: "Mowing",
    img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?w=800&q=80",
    featured: true,
  },
  {
    title: "How to Fertilize Your Alberta Lawn for Maximum Growth",
    desc: "A deep dive into fertilization schedules and product choices for our Alberta climate.",
    date: "August 28, 2026",
    readTime: "5 min read",
    category: "Fertilization",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80",
    featured: false,
  },
  {
    title: "Fall Lawn Prep Checklist: Get Your Grass Ready for Winter",
    desc: "Don't let the cold season catch your lawn off-guard. Follow these essential fall prep steps.",
    date: "August 14, 2026",
    readTime: "4 min read",
    category: "Seasonal",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    featured: false,
  },
];

export default function Blog() {
  return (
    <section className={styles.section} id="blog">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Lawn Care Tips</span>
          <h2 className="section-title">Lawn care tips<br />for Your Garden</h2>
          <p className="section-body">
            Expert advice from our team to help you maintain a healthy, beautiful lawn year-round.
          </p>
        </div>

        <div className={styles.grid}>
          {articles.map((a, i) => (
            <article
              key={i}
              className={`${styles.card} ${a.featured ? styles.cardFeatured : ""}`}
              data-reveal
            >
              <div className={styles.imgWrap}>
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  placeholder="empty"
                />
                <span className={styles.imgScrim} aria-hidden="true" />
                <span className={styles.cat}>{a.category}</span>
              </div>
              <div className={styles.content}>
                <p className={styles.date}>
                  <CalendarDays size={13} strokeWidth={2} aria-hidden="true" />
                  <span>{a.date}</span>
                  <span className={styles.dateDot} aria-hidden="true" />
                  <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  <span>{a.readTime}</span>
                </p>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.desc}>{a.desc}</p>
                <a href="#quote" className={styles.link}>
                  <span>Read Article</span>
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#quote" className="btn btn-outline">
            <span>View All Articles</span>
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
