import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

/**
 * Prefix a root-relative path ("/work/foo") with the configured base path
 * (e.g. "/aleksandra-slomska-it-support"). External URLs, protocol-relative
 * URLs, mailto:, anchors and already-prefixed paths are returned unchanged.
 */
export function withBase<T extends string | undefined>(path: T): T {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!base || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}` as T;
}
