"use client";

import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 50,
        display: "flex",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: 3,
        gap: 2,
      }}
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            padding: "5px 10px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 0.18s, color 0.18s",
            background: lang === l ? "var(--accent)" : "transparent",
            color: lang === l ? "var(--white)" : "var(--text-muted)",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
