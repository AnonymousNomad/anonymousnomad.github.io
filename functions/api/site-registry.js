import { SITE, PROJECTS } from '../../src/data/site-registry.js';
import { TV_SECTIONS, NEXUS_SECTIONS, WORKSHOP_SECTIONS } from '../../src/data/section-registry.js';

export async function onRequestGet() {
  return new Response(JSON.stringify({
    schema: 'nomadic-labs.public-registry.v1',
    generated_from: 'source-controlled public registry',
    site: SITE,
    projects: PROJECTS,
    sections: {
      tv: TV_SECTIONS,
      nexus: NEXUS_SECTIONS,
      workshop: WORKSHOP_SECTIONS
    }
  }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'x-content-type-options': 'nosniff'
    }
  });
}
