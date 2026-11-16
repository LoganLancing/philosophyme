// Gumroad links that say where a buyer came from.
//
// Site links used to carry rel="noreferrer", so Gumroad filed every visit from
// PhilosophyMe under "Direct". Each Gumroad link now carries UTM tags, which
// Gumroad records under Analytics > Links:
//   utm_source=philosophyme   the site
//   utm_medium=website
//   utm_campaign=<location>   which card or button (guides-hero, philosopher-bottom...)
// SiteAnalytics adds utm_content=<page path> at click time, so a sale can be
// traced to the page the reader was on (for example /philosophers/socrates/).
export function gumroadLink(url: string, location: string): string {
  const u = new URL(url);
  u.searchParams.set('utm_source', 'philosophyme');
  u.searchParams.set('utm_medium', 'website');
  u.searchParams.set('utm_campaign', location);
  return u.toString();
}
