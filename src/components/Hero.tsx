"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function Hero() {
  const { t } = useLang();

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-10">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease }}
        className="relative mb-6"
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(201,123,75,0.2)",
            border: "2.5px solid var(--border)",
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="Leo Mosconi — lifestyle creator"
            width={96}
            height={96}
            priority
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#4CAF50",
            border: "2.5px solid var(--bg)",
          }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(2rem, 6vw, 2.75rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "var(--text)",
          marginBottom: 8,
        }}
      >
        Leo Mosconi
      </motion.h1>

      {/* Handle */}
      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontSize: 15,
          color: "var(--accent)",
          fontWeight: 500,
          letterSpacing: "0.04em",
          marginBottom: 10,
        }}
      >
        {t.hero.handle}
      </motion.p>

      {/* Tags */}
      <motion.div
        {...fadeUp(0.3)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          marginBottom: 18,
        }}
      >
        {t.hero.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 12,
              fontWeight: 500,
              padding: "4px 12px",
              borderRadius: 999,
              background: "var(--bg-card)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              letterSpacing: "0.03em",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.4)}
        style={{
          fontSize: "clamp(14px, 3.5vw, 16px)",
          color: "var(--text-muted)",
          lineHeight: 1.65,
          maxWidth: 360,
          marginBottom: 28,
        }}
      >
        {t.hero.tagline}
        <br />
        {t.hero.subtitle}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.5)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 320,
        }}
      >
        <button
          onClick={scrollToContact}
          style={{
            background: "var(--accent)",
            color: "var(--white)",
            border: "none",
            borderRadius: 12,
            padding: "14px 24px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.01em",
            transition: "background 0.2s, transform 0.15s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-dark)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          {t.hero.cta}
        </button>

        <a
          href="https://www.instagram.com/leomosconi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            border: "1.5px solid var(--border)",
            color: "var(--text)",
            borderRadius: 12,
            padding: "14px 24px",
            fontSize: 15,
            fontWeight: 500,
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "border-color 0.2s, transform 0.15s",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          {t.hero.instagram}
        </a>
      </motion.div>
    </section>
  );
}
