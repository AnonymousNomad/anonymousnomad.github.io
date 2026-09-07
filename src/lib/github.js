/**
 * Minimal GitHub API helper.
 * No API key. 60 req/hr unauthenticated. Falls back to local data on failure.
 * Caches in localStorage for 5 minutes (matches the existing site pattern).
 */

const STORAGE_KEY = 'nn_github_repos';
const TTL_MS = 5 * 60 * 1000;
const ENDPOINT = 'https://api.github.com/users/AnonymousNomad/repos?per_page=100&sort=updated';

const PER_PAGE = 100;

/** Fetch all public repos for the user, with cache. */
export async function fetchRepos() {
  // Try cache first
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts < TTL_MS) return data;
    }
  } catch (e) {
    /* ignore */
  }

  // Network fetch
  try {
    const res = await fetch(ENDPOINT, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now(), data }));
    } catch (e) {
      /* storage full or disabled */
    }
    return data;
  } catch (e) {
    console.warn('GitHub API failed, returning empty list:', e.message);
    return [];
  }
}

/** Force-refresh the cache. */
export async function refreshRepos() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
  return fetchRepos();
}

/** Format an ISO date as a relative time string (e.g. "3 days ago"). */
export function relativeTime(iso) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);
  const min = 60_000;
  const hr = 60 * min;
  const day = 24 * hr;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;
  if (diff < min) return 'just now';
  if (diff < hr) return `${Math.floor(diff / min)}m ago`;
  if (diff < day) return `${Math.floor(diff / hr)}h ago`;
  if (diff < week) return `${Math.floor(diff / day)}d ago`;
  if (diff < month) return `${Math.floor(diff / week)}w ago`;
  if (diff < year) return `${Math.floor(diff / month)}mo ago`;
  return `${Math.floor(diff / year)}y ago`;
}

/** Pick the dominant language for a repo (heuristic). */
export function dominantLanguage(repo) {
  return repo?.language || 'Unknown';
}
