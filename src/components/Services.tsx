"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🎬",
    title: "Reels",
    description:
      "El 81.9% de mis views vienen de Reels. Integración natural con tu marca, storytelling auténtico que engancha desde el primer segundo.",
  },
  {
    icon: "📱",
    title: "Stories",
    description:
      "Formato íntimo y de alta confianza. Ideal para lanzamientos, descuentos o mostrar el behind-the-scenes de tu producto.",
  },
  {
    icon: "🖼️",
    title: "Posts & Carruseles",
    description:
      "Contenido que se guarda y se comparte. Perfecto para comunicar valores de marca o mostrar una colección completa.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "32px 24px",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          Para marcas
        </p>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
            lineHeight: 1.15,
            color: "var(--text)",
          }}
        >
          ¿Qué puedo hacer por tu marca?
        </h2>
      </motion.div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            <span
              style={{
                fontSize: 28,
                lineHeight: 1,
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {s.icon}
            </span>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {s.title}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
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
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Audiencia:</strong>{" "}
          25–34 años · Argentina, México, Chile, España
        </p>
      </motion.div>
    </section>
  );
}
