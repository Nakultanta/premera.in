"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -200, y: -200 });
  const blob    = useRef({ x: -200, y: -200 });
  const raf     = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovered(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout",  onOut,  { passive: true });

    // Liquid lag loop
    const EASE = 0.10;
    const loop = () => {
      blob.current.x += (mouse.current.x - blob.current.x) * EASE;
      blob.current.y += (mouse.current.y - blob.current.y) * EASE;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }
      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate(${blob.current.x}px, ${blob.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Liquid blob */}
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          width:  hovered ? "38px" : "24px",
          height: hovered ? "38px" : "24px",
          borderRadius: hovered ? "38% 62% 55% 45% / 48% 44% 56% 52%" : "50% 44% 58% 42% / 46% 52% 48% 54%",
          background: hovered
            ? "rgba(161, 99, 26, 0.18)"
            : "rgba(195, 131, 45, 0.10)",
          border: `1.5px solid rgba(161, 99, 26, ${hovered ? 0.55 : 0.35})`,
          backdropFilter: "blur(2px)",
          transition: "width 0.35s cubic-bezier(.22,1,.36,1), height 0.35s cubic-bezier(.22,1,.36,1), border-radius 1.8s ease, background 0.3s ease, border-color 0.3s ease",
          opacity: visible ? 1 : 0,
          animation: "blob-morph 4s ease-in-out infinite",
        }}
      />

      {/* Sharp dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          width:  hovered ? "5px" : "5px",
          height: hovered ? "5px" : "5px",
          borderRadius: "50%",
          background: hovered ? "#A1631A" : "#C3832D",
          transition: "background 0.2s ease, transform 0.05s linear",
          opacity: visible ? 1 : 0,
          mixBlendMode: "multiply",
        }}
      />

      <style>{`
        @keyframes blob-morph {
          0%,100% { border-radius: 50% 44% 58% 42% / 46% 52% 48% 54%; }
          25%      { border-radius: 42% 58% 44% 56% / 54% 46% 54% 46%; }
          50%      { border-radius: 58% 42% 52% 48% / 44% 56% 44% 56%; }
          75%      { border-radius: 44% 56% 48% 52% / 56% 44% 58% 42%; }
        }
        * { cursor: none !important; }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
