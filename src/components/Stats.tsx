"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import type { InstagramMetrics } from "@/app/api/instagram/route";

const ease = [0.22, 1, 0.36, 1] as const;

const GROWTH = "+1,224%";

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, target]);

  const formatted =
    count >= 10000
      ? `${(count / 1000).toFixed(1)}K`
      : count >= 1000
      ? count.toLocaleString("es-AR")
      : count.toString();

  return <span ref={ref}>{formatted}</span>;
}

export default function Stats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [metrics, setMetrics] = useState<InstagramMetrics | null>(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data: InstagramMetrics) => setMetrics(data))
      .catch(() => {});
  }, []);

  const items = [
    {
      key: "impressions",
      label: t.stats.items.views,
      value: metrics?.impressions ?? 54115,
    },
    {
      key: "reach",
      label: t.stats.items.reach,
      value: metrics?.reach ?? 13183,
    },
    {
      key: "growth",
      label: t.stats.items.growth,
      value: null,
      display: GROWTH,
    },
    ...(metrics?.followers != null
      ? [{ key: "followers", label: t.stats.items.followers, value: metrics.followers }]
      : [{ key: "profileVisits", label: t.stats.items.profileVisits, value: metrics?.profileViews ?? 1609 }]),
  ];

  return (
    <section
      ref={ref}
      style={{ padding: "0 24px 16px", maxWidth: 480, margin: "0 auto", width: "100%" }}
    >
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: 20,
          padding: "24px 20px",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {t.stats.eyebrow}
          </p>
          {metrics?.isLive && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#E04B4B",
                padding: "2px 8px",
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "inline-block",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
              {t.stats.live}
            </span>
          )}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              style={{
                background: "var(--bg)",
                borderRadius: 14,
                padding: "16px 14px",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
                  lineHeight: 1,
                  color: "var(--text)",
                  marginBottom: 6,
                }}
              >
                {item.display ? (
                  <span>{item.display}</span>
                ) : (
                  <AnimatedNumber target={item.value!} />
                )}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            fontSize: 11,
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: 16,
            letterSpacing: "0.02em",
          }}
        >
          {metrics?.isLive ? t.stats.periodLive : t.stats.period}
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
