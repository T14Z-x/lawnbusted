import { Award, Leaf, ShieldCheck, Star, Zap } from "lucide-react";
import styles from "./TrustBar.module.css";

/* Trust signals — each icon keeps its outline shape inside a tinted chip.
   Filling these glyphs (the old `.ic-solid`) turned them into blobs, so the
   emphasis now comes from the chip rather than from flooding the paths. */
const items = [
  { icon: Star, label: "4.9 on Google (320+ Reviews)", tone: "gold" },
  { icon: Award, label: "Best of Alberta 2024", tone: "gold" },
  { icon: ShieldCheck, label: "Fully Licensed & Insured", tone: "green" },
  { icon: Leaf, label: "Health Canada Eco Products", tone: "green" },
  { icon: Zap, label: "Same-Week Fast Dispatch", tone: "green" },
] as const;

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={`${styles.inner} container`}>
        {items.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.label} className={styles.item}>
              <span
                className={`icon-chip icon-chip--sm icon-chip--glass ${styles.chip} ${
                  item.tone === "gold" ? styles.chipGold : ""
                }`}
              >
                <IconComp size={14} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}