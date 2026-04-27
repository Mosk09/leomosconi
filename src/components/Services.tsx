"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{ padding: "32px 24px", maxWidth: 480, margin: "0 auto", width: "100%" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease }}
        style={{ marginBottom: 20 }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 6,
          }}
        >
          {t.services.eyebrow}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
            lineHeight: 1.15,
            color: "var(--text)",
          }}
        >
          {t.services.heading}
        </h2>
      </motion.div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {t.services.items.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "18px 20px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
              {s.icon}
            </span>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                {s.title}
              </p>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Audience note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 18 }}>🌎</span>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
          {t.services.audience}
        </p>
      </motion.div>
    </section>
  );
}
