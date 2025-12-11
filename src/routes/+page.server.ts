import { redirect } from '@sveltejs/kit';
import config from '$src/helpers/config';
import * as publicEnvs from '$env/static/public';
import type { PageServerLoad } from './$types';

// IMPORTANT:
// Do not let the root page be prerendered or treated as a static page
// when it conditionally redirects. That triggers duplicate Vercel
// functions during the adapter step.
export const prerender = false;

export const load: PageServerLoad = () => {
  const shouldLoadIndex =
    publicEnvs.PUBLIC_LOAD_INDEX === 'true' ||
    config?.loadIndex === true;

  if (shouldLoadIndex) {
    throw redirect(302, '/index');
  }

  // Return an empty object when not redirecting
  return {};
};
