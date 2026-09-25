// GA4 event helper. Safe to call before (or without) the gtag script: it does nothing then.
//
// Events sent by the site (mark the first two as key events in GA4 → Admin → Events):
//   email_signup        — someone joined the email list (param: signup_location)
//   gumroad_click       — clicked through to a Gumroad product (product_name, link_location)
//   free_download       — downloaded a free PDF (file_name, link_location)
//   coffee_click        — clicked a Buy Me a Coffee link (link_location)
//   email_signup_error  — the signup request failed

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, { page_path: window.location.pathname, ...params });
}
