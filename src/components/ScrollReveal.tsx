"use client";

import { useEffect } from "react";

/**
 * Progressively-enhanced scroll reveal.
 *
 * Mounted once by the page. It finds every `[data-reveal]` element that is
 * genuinely below the fold, hides it, then reveals it on intersection with a
 * small sibling stagger. Because only off-screen elements are touched, there
 * is no flash of invisible content and nothing is lost when JS is off.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (targets.length === 0) return;

    const viewportHeight = window.innerHeight;
    const pending = targets.filter(
      (el) => el.getBoundingClientRect().top >= viewportHeight * 0.9
    );
    if (pending.length === 0) return;

    pending.forEach((el) => el.setAttribute("data-reveal-state", "hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-reveal-state", "visible");
          // Drop the stagger delay once done so it never affects later paint.
          el.addEventListener(
            "animationend",
            () => {
              el.style.animationDelay = "";
            },
            { once: true }
          );
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    pending.forEach((el) => {
      const siblings = pending.filter(
        (other) => other.parentElement === el.parentElement
      );
      const index = siblings.indexOf(el);
      if (index > 0) {
        el.style.animationDelay = `${Math.min(index, 6) * 70}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}