"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numericValue?: number;
}

const stats: Stat[] = [
  { value: "54.1K", label: "Views totales", numericValue: 54100 },
  { value: "13.1K", label: "Cuentas alcanzadas", numericValue: 13100 },
  { value: "+1,224%", label: "Crecimiento de alcance" },
  { value: "1,609", label: "Visitas al perfil", numericValue: 1609 },
];

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
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
    count >= 1000
      ? count >= 10000
        ? `${(count / 1000).toFixed(1)}K`
        : count.toLocaleString("es-AR")
      : count.toString();

  return <span ref={ref}>{formatted}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "0 24px 16px",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: 20,
          padding: "24px 20px",
          border: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Métricas recientes
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                {stat.numericValue !== undefined ? (
                  <AnimatedNumber target={stat.numericValue} />
                ) : (
                  <span>{stat.value}</span>
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
                {stat.label}
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
          Período: Mar 21 – Abr 19, 2026
        </p>
      </div>
    </section>
  );
}
