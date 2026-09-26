/* ============================================
   BRAND MARKS
   Lucide ships no brand logos, so these are real inline SVG marks —
   no icon fonts, no external requests, and they stay crisp at any size.
   Each mark is decorative by default; pass `title` to promote it to an
   accessible image (the labels already sit in the surrounding text/aria).
   ============================================ */

type BrandIconProps = {
  size?: number;
  className?: string;
  title?: string;
};

/* Shared a11y plumbing so all three marks behave identically. */
function a11y(title?: string) {
  return {
    "aria-hidden": title ? undefined : ("true" as const),
    role: title ? ("img" as const) : undefined,
    focusable: "false" as const,
  };
}

/* Facebook */
export function FacebookIcon({ size = 16, className = "", title }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...a11y(title)}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"
      />
    </svg>
  );
}

/* Instagram */
export function InstagramIcon({ size = 16, className = "", title }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...a11y(title)}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        d="M7.5 2.6h9A4.9 4.9 0 0 1 21.4 7.5v9a4.9 4.9 0 0 1-4.9 4.9h-9A4.9 4.9 0 0 1 2.6 16.5v-9A4.9 4.9 0 0 1 7.5 2.6Z"
      />
      <circle
        cx="12"
        cy="12"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </svg>
  );
}

/* Google "G" — four-colour brand mark */
export function GoogleIcon({ size = 16, className = "", title }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      {...a11y(title)}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}