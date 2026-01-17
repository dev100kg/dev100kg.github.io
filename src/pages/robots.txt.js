const isProdSite = (site) => {
  if (!site) return false;
  const hostname = site.hostname;
  return hostname !== 'localhost' && !hostname.endsWith('github.io');
};

/** @type {import('astro').APIRoute} */
export const GET = ({ site }) => {
  const allowIndexing = isProdSite(site);
  const body = allowIndexing
    ? ['User-agent: *', 'Allow: /'].join('\n')
    : ['User-agent: *', 'Disallow: /'].join('\n');

  return new Response(body + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
