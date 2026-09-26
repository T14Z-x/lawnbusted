import { Sprout } from "lucide-react";
import styles from "./Logo.module.css";

type LogoProps = {
  /** `dark` = forest text for light surfaces, `light` = white text for dark surfaces */
  variant?: "dark" | "light";
  size?: "md" | "lg";
};

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[variant]} ${styles[size]}`}>
      <span className={styles.mark}>
        <Sprout size={size === "lg" ? 21 : 18} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className={styles.text}>LawnBusted</span>
    </span>
  );
}