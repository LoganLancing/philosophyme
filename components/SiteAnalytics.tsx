'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// One click listener for the whole site: records Gumroad clicks, free PDF downloads and
// Buy Me a Coffee clicks as GA4 events, so no individual link needs its own handler.
// A link reports where it sits through the nearest data-track-location attribute.
export default function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href;
      const location =
        link.closest('[data-track-location]')?.getAttribute('data-track-location') || 'page';

      if (href.includes('gumroad.com')) {
        const product = href.includes('the-complete-collection')
          ? 'Companion Guide'
          : href.includes('thought-experiments')
            ? 'Thought Experiments'
            : 'Store';
        trackEvent('gumroad_click', { product_name: product, link_location: location });
        // Tag the page the reader is on, so Gumroad's Links report shows which
        // pages lead to sales. Runs before the browser follows the link.
        try {
          const u = new URL(link.href);
          if (u.searchParams.has('utm_source') && !u.searchParams.has('utm_content')) {
            u.searchParams.set('utm_content', window.location.pathname);
            link.href = u.toString();
          }
        } catch {
          // Leave the link as it is.
        }
      } else if (/\/downloads\/[^/]+\.pdf$/i.test(link.pathname)) {
        trackEvent('free_download', {
          file_name: link.pathname.split('/').pop() || '',
          link_location: location,
        });
      } else if (href.includes('buymeacoffee.com')) {
        trackEvent('coffee_click', { link_location: location });
      }
    };
    // Capture phase, so the event is sent before the browser follows the link.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
