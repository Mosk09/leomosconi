import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour server-side

export interface InstagramMetrics {
  followers: number | null;
  reach: number | null;
  impressions: number | null;
  profileViews: number | null;
  isLive: boolean;
}

const FALLBACK: InstagramMetrics = {
  followers: null,
  reach: 14411,
  impressions: 62175,
  profileViews: 1878,
  isLive: false,
};

async function fetchWithTimeout(url: string, ms = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(id);
  return res;
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(FALLBACK);
  }

  try {
    // Fetch follower count and media count
    const profileRes = await fetchWithTimeout(
      `https://graph.instagram.com/me?fields=followers_count,media_count&access_token=${token}`
    );

    if (!profileRes.ok) {
      return NextResponse.json(FALLBACK);
    }

    const profile = await profileRes.json();

    // Fetch account insights (requires instagram_manage_insights permission)
    const insightsRes = await fetchWithTimeout(
      `https://graph.instagram.com/me/insights?metric=reach,impressions,profile_views&period=days_28&access_token=${token}`
    );

    let reach: number | null = null;
    let impressions: number | null = null;
    let profileViews: number | null = null;

    if (insightsRes.ok) {
      const insights = await insightsRes.json();
      const data: Array<{ name: string; values: Array<{ value: number }> }> =
        insights.data ?? [];

      for (const metric of data) {
        const latest = metric.values?.at(-1)?.value ?? null;
        if (metric.name === "reach") reach = latest;
        if (metric.name === "impressions") impressions = latest;
        if (metric.name === "profile_views") profileViews = latest;
      }
    }

    const result: InstagramMetrics = {
      followers: profile.followers_count ?? null,
      reach,
      impressions,
      profileViews,
      isLive: true,
    };

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
