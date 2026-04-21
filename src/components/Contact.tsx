"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Colaboración con ${nombre}`);
    const body = encodeURIComponent(
      `Hola Leo,\n\nSoy ${nombre}.\nEmail: ${email}\n\n${mensaje}`
    );

    window.location.href = `mailto:leomosconi9@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    e.preventDefault();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 14,
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contacto"
      ref={ref}
      style={{
        padding: "32px 24px 48px",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "var(--border)",
          marginBottom: 32,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 24 }}
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
          Contacto
        </p>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
            lineHeight: 1.15,
            color: "var(--text)",
            marginBottom: 8,
          }}
        >
          ¿Trabajamos juntos?
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
          Contame sobre tu marca y lo que buscás. Te respondo en menos de 24 horas.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <div>
          <label
            htmlFor="nombre"
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 6,
              letterSpacing: "0.03em",
            }}
          >
            Nombre y marca
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Ej: María · Marca XYZ"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 6,
              letterSpacing: "0.03em",
            }}
          >
            Tu email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="hola@tumarca.com"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 6,
              letterSpacing: "0.03em",
            }}
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={4}
            placeholder="Contame sobre tu marca, el producto y qué tipo de colaboración buscás..."
            style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </div>

        <button
          type="submit"
          style={{
            background: sent ? "#4CAF50" : "var(--accent)",
            color: "var(--white)",
            border: "none",
            borderRadius: 12,
            padding: "14px 24px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
            fontFamily: "inherit",
            marginTop: 4,
          }}
          onMouseEnter={(e) => {
            if (!sent)
              (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-dark)";
          }}
          onMouseLeave={(e) => {
            if (!sent)
              (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)";
          }}
        >
          {sent ? "¡Abriendo tu correo! ✓" : "Enviar mensaje →"}
        </button>
      </motion.form>

      {/* Alt contact */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        O escribime directo a{" "}
        <a
          href="mailto:leomosconi9@gmail.com"
          style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
        >
          leomosconi9@gmail.com
        </a>
      </motion.p>

      {/* Footer */}
      <p
        style={{
          fontSize: 11,
          color: "var(--border)",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        © 2026 Leo Mosconi
      </p>
    </section>
  );
}
